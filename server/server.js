import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper: validate email address format
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Helper: create Nodemailer SMTP transport if configured
const getTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.EMAIL_USER || process.env.SMTP_USER;
  const pass = process.env.EMAIL_PASSWORD || process.env.SMTP_PASS;

  // Never hardcode credentials; require them to be provided via environment variables
  if (!user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
};

// POST /api/contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name?.trim()) return res.status(400).json({ error: 'Name is required' });
    if (!email?.trim()) return res.status(400).json({ error: 'Email is required' });
    if (!isValidEmail(email)) return res.status(400).json({ error: 'Please enter a valid email address' });
    if (!subject?.trim()) return res.status(400).json({ error: 'Subject is required' });
    if (!message?.trim()) return res.status(400).json({ error: 'Message is required' });

    const submission = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    // Save submission locally to submissions.json
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
      let submissions = [];
      try {
        const fileContent = await fs.readFile(DATA_FILE, 'utf8');
        submissions = JSON.parse(fileContent);
        if (!Array.isArray(submissions)) submissions = [];
      } catch (err) {
        if (err.code !== 'ENOENT') console.error('Error reading submissions file:', err);
      }
      submissions.push(submission);
      await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf8');
      console.log(`[Contact] Submission saved: ${submission.id}`);
    } catch (saveError) {
      console.error('[Contact] Failed to save submission locally:', saveError);
    }

    // Send email via Nodemailer
    const transporter = getTransporter();
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'saadrajpoot3355@gmail.com';

    if (!transporter) {
      console.error('[Contact] SMTP credentials (EMAIL_USER / EMAIL_PASSWORD) not configured.');
      return res.status(500).json({
        error: 'Email service is not configured on the server.',
      });
    }

    try {
      await transporter.sendMail({
        from: `"${name} (Portfolio Inquiry)" <${process.env.EMAIL_USER || process.env.SMTP_USER}>`,
        to: receiverEmail,
        replyTo: email,
        subject: `Portfolio: ${subject}`,
        text: `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #0a0c14; color: #fff; padding: 24px; border-radius: 12px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #38bdf8; margin-top: 0;">New Contact Form Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 16px; padding: 16px; background-color: #0c0e17; border: 1px solid #1e293b; border-radius: 8px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
        `
      });
      console.log('[Contact] Email notification sent successfully');
    } catch (emailErr) {
      console.error('[Contact] Failed to send email via SMTP:', emailErr);
      return res.status(500).json({
        error: 'Failed to deliver email. Please try again.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
      id: submission.id
    });

  } catch (error) {
    console.error('[Contact] Error processing request:', error);
    return res.status(500).json({ error: 'Internal server error while processing message' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running smoothly' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`==========================================`);
  console.log(`  Portfolio Server running on port ${PORT}`);
  console.log(`  Endpoint: POST http://localhost:${PORT}/api/contact`);
  console.log(`==========================================`);
});

export default app;
