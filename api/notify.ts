import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    device, browser, ip, location, sourceUrl, referrer, screenSize, language, userAgent,
    name, email, org, postal, timezone, asn, latitude, longitude
  } = req.body;

  try {
    // Configure the transporter
    // Requires EMAIL_USER and EMAIL_PASS environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || '"Portfolio Notifier" <noreply@portfolio.com>',
      to: 'karachiwalaumer2612@gmail.com',
      subject: `New Visitor on Your Portfolio!`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4A90E2;">New Visitor Alert 🚀</h2>
          <p>Someone just visited your portfolio site.</p>
          <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Name</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name || 'Not Provided (Requires Form Input)'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Email</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email || 'Not Provided (Requires Form Input)'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">IP Address</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${ip || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${location || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Lat / Long</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${latitude && longitude ? `${latitude}, ${longitude}` : 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Timezone</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${timezone || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Postal Code</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${postal || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">ISP / Org</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${org || 'Unknown'} (${asn || 'Unknown'})</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Device / OS</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${device || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Browser</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${browser || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Screen Size</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${screenSize || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Language</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${language || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Page Visited</td>
              <td style="padding: 8px; border: 1px solid #ddd;"><a href="${sourceUrl}">${sourceUrl || 'Unknown'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Referred From</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${referrer && referrer !== 'Direct Visit' ? `<a href="${referrer}">${referrer}</a>` : 'Direct Visit'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Time</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 0.9em; color: #777;">
            Raw User Agent: ${userAgent || 'Unknown'}
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: error.message || 'Failed to send email' });
  }
}
