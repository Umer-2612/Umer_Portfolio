import { useEffect, useRef } from 'react';

export function useVisitorTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    // Only track once per session and only in production to avoid local dev spam, 
    // unless you want to test it locally (can temporarily override).
    if (tracked.current || sessionStorage.getItem('visitor_tracked')) {
      return;
    }

    const trackVisitor = async () => {
      tracked.current = true;
      sessionStorage.setItem('visitor_tracked', 'true');

      let ip = 'Unknown';
      let location = 'Unknown';
      let networkData: any = {};

      // Try to get IP and Location
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          ip = data.ip || 'Unknown';
          networkData = data;
          // Filter out missing parts to just get City, Country
          const parts = [data.city, data.region, data.country_name].filter(Boolean);
          if (parts.length > 0) {
            location = parts.join(', ');
          }
        }
      } catch (error) {
        console.warn('Failed to fetch IP details', error);
      }

      // Gather device details
      const userAgent = navigator.userAgent;

      // Basic OS extraction
      let device = 'Unknown OS';
      if (userAgent.indexOf('Win') !== -1) device = 'Windows';
      if (userAgent.indexOf('Mac') !== -1) device = 'MacOS';
      if (userAgent.indexOf('Linux') !== -1) device = 'Linux';
      
      let exactModel = '';
      if (userAgent.indexOf('Android') !== -1) {
        device = 'Android';
        // Try to extract Android model (e.g. "...; Android 11; SM-G998B Build/...")
        const match = userAgent.match(/Android [0-9.]+; ([a-zA-Z0-9\- ]+) Build/);
        if (match && match[1]) exactModel = match[1].trim();
      } else if (userAgent.indexOf('like Mac') !== -1) {
        device = 'iOS';
        // Apple blocks the exact iPhone model in the browser User-Agent.
        // The most reliable way to guess an iPhone model is by mapping its unique screen dimensions.
        const w = window.screen.width;
        const h = window.screen.height;
        const ratio = window.devicePixelRatio || 1;
        
        const dimStr1 = `${w}x${h}@${ratio}x`;
        const dimStr2 = `${h}x${w}@${ratio}x`; // Handle landscape
        
        const iphoneMap: Record<string, string> = {
          '320x480@2x': 'iPhone 4/4S',
          '320x568@2x': 'iPhone 5/5S/SE1',
          '375x667@2x': 'iPhone 6/7/8/SE2/SE3',
          '414x736@3x': 'iPhone 6/7/8 Plus',
          '375x812@3x': 'iPhone X/XS/11Pro/12Mini/13Mini',
          '414x896@2x': 'iPhone XR/11',
          '414x896@3x': 'iPhone XSMax/11ProMax',
          '390x844@3x': 'iPhone 12/13/14',
          '428x926@3x': 'iPhone 12/13/14ProMax/14Plus',
          '393x852@3x': 'iPhone 14Pro/15/15Pro',
          '430x932@3x': 'iPhone 14ProMax/15Plus/15ProMax'
        };
        
        exactModel = iphoneMap[dimStr1] || iphoneMap[dimStr2] || 'iPhone Model Unknown';
      }

      if (exactModel) {
        device = `${device} - ${exactModel}`;
      }

      // Basic browser extraction
      let browser = 'Unknown Browser';
      if (userAgent.indexOf('Edg/') !== -1) browser = 'Edge';
      else if (userAgent.indexOf('Chrome') !== -1) browser = 'Chrome';
      else if (userAgent.indexOf('Safari') !== -1) browser = 'Safari';
      else if (userAgent.indexOf('Firefox') !== -1) browser = 'Firefox';

      const payload = {
        device,
        browser,
        ip,
        location,
        sourceUrl: window.location.href,
        referrer: document.referrer || 'Direct Visit',
        screenSize: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        userAgent,
        org: networkData.org,
        postal: networkData.postal,
        timezone: networkData.timezone,
        asn: networkData.asn,
        latitude: networkData.latitude,
        longitude: networkData.longitude,
      };

      // Send to our Vercel Serverless Function
      try {
        await fetch('/api/notify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (error) {
        console.error('Failed to notify visitor tracking', error);
      }
    };

    // Delay tracking slightly so it doesn't block critical rendering path
    const timeout = setTimeout(() => {
      trackVisitor();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
}
