import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Creates and returns the SMTP transporter if credentials are provided.
 */
const getTransporter = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: parseInt(SMTP_PORT || '587', 10) === 465, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

/**
 * Sends a contact form notification email.
 * 
 * @param {Object} details Contact form submission details
 * @param {string} details.name Name of the sender
 * @param {string} details.email Email address of the sender
 * @param {string} details.subject Subject of the message
 * @param {string} details.message Message body
 */
export const sendContactEmail = async ({ name, email, subject, message }) => {
  const transporter = getTransporter();
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'saadrajpoot3355@gmail.com';

  if (!transporter) {
    console.warn('[EmailService] SMTP credentials are not configured. Skipping email sending.');
    return { sent: false, reason: 'SMTP not configured' };
  }

  // Modern HTML Email Template matching the portfolio's aesthetics
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Message</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #0a0c14;
            color: #f1f5f9;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #0c0e17;
            border: 1px solid #1e293b;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }
          .header {
            background: linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%);
            padding: 30px 24px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: #ffffff;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.025em;
          }
          .header p {
            margin: 5px 0 0 0;
            color: #93c5fd;
            font-size: 14px;
          }
          .content {
            padding: 24px;
          }
          .field-group {
            margin-bottom: 20px;
            border-bottom: 1px solid #1e293b;
            padding-bottom: 15px;
          }
          .field-group:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .label {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748b;
            margin-bottom: 6px;
          }
          .value {
            font-size: 15px;
            color: #ffffff;
            line-height: 1.5;
          }
          .value-link {
            color: #38bdf8;
            text-decoration: none;
          }
          .message-box {
            background-color: #0f172a;
            border: 1px solid #1e293b;
            border-radius: 8px;
            padding: 16px;
            font-size: 14px;
            color: #cbd5e1;
            line-height: 1.6;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #090a0f;
            padding: 20px 24px;
            text-align: center;
            border-top: 1px solid #1e293b;
            font-size: 12px;
            color: #64748b;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Inquiry Received</h1>
            <p>From your Professional Portfolio Site</p>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="label">Sender Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" class="value-link">${email}</a></div>
            </div>
            
            <div class="field-group">
              <div class="label">Subject</div>
              <div class="value" style="font-weight: 600;">${subject}</div>
            </div>
            
            <div class="field-group">
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            Sent automatically by the Portfolio Backend. All local times relative to the server instance.
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `"${name} (Portfolio Inquiry)" <${process.env.SMTP_USER}>`,
    to: receiverEmail,
    replyTo: email,
    subject: `Portfolio: ${subject}`,
    text: `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('[EmailService] Email sent successfully:', info.messageId);
    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error('[EmailService] Error sending email:', error);
    throw error;
  }
};
