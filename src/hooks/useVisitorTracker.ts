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
      if (userAgent.indexOf('Android') !== -1) device = 'Android';
      if (userAgent.indexOf('like Mac') !== -1) device = 'iOS';

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
