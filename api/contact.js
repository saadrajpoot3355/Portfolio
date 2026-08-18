import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Input Validation
    if (!name?.trim()) return res.status(400).json({ error: 'Name is required' });
    if (!email?.trim()) return res.status(400).json({ error: 'Email is required' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Valid email address is required' });
    }
    if (!subject?.trim()) return res.status(400).json({ error: 'Subject is required' });
    if (!message?.trim()) return res.status(400).json({ error: 'Message is required' });

    const user = process.env.EMAIL_USER || process.env.SMTP_USER;
    const pass = process.env.EMAIL_PASSWORD || process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'saadrajpoot3355@gmail.com';

    // Verify SMTP credentials are configured
    if (!user || !pass) {
      console.error('[Contact API] Email credentials (EMAIL_USER / EMAIL_PASSWORD) not configured.');
      return res.status(500).json({
        error: 'Email service is not configured. Please contact the administrator directly.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: parseInt(process.env.SMTP_PORT || '587', 10) === 465,
      auth: { user, pass },
    });

    // Send the email via Nodemailer
    await transporter.sendMail({
      from: `"${name}" <${user}>`,
      to: receiver,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0c0e17; color: #f8fafc; border-radius: 10px;">
          <h2 style="color: #38bdf8; margin-top: 0;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #1e293b; padding: 15px; border-radius: 8px; margin-top: 15px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });

    // Only return success after email is actually dispatched
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
}
