import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// Resolve paths for the local JSON datastore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

// Helper to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * POST /api/contact
 * Handles contact form submission
 */
router.post('/', async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'Email address is required' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }
    if (!subject || !subject.trim()) {
      return res.status(400).json({ error: 'Subject is required' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const submission = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    // 2. Log/Save to local JSON file (acts as database fallback)
    try {
      // Ensure the directory exists
      await fs.mkdir(DATA_DIR, { recursive: true });

      let submissions = [];
      try {
        const fileContent = await fs.readFile(DATA_FILE, 'utf8');
        submissions = JSON.parse(fileContent);
        if (!Array.isArray(submissions)) {
          submissions = [];
        }
      } catch (err) {
        // If file doesn't exist, we start with empty array
        if (err.code !== 'ENOENT') {
          console.error('[ContactRouter] Error reading submissions file:', err);
        }
      }

      submissions.push(submission);
      await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf8');
      console.log('[ContactRouter] Submission saved to local storage:', submission.id);
    } catch (saveError) {
      console.error('[ContactRouter] Local file database save failed:', saveError);
      // We will still try to send the email and continue, as the email might succeed
    }

    // 3. Send email notification
    let emailStatus = { sent: false };
    try {
      emailStatus = await sendContactEmail(submission);
    } catch (emailError) {
      console.error('[ContactRouter] Email notification failed:', emailError);
      // We don't fail the response, because the submission was already saved.
      // We notify the frontend that the submission was recorded but email failed,
      // or we can just say "Success" to the user and log email errors internally.
      return res.status(202).json({
        success: true,
        message: 'Your message has been saved successfully, but there was an issue sending the email notification. I will review it in my records.',
        id: submission.id,
        emailNotification: 'failed'
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for your message! It has been submitted successfully and I will get back to you soon.',
      id: submission.id,
      emailNotification: emailStatus.sent ? 'sent' : 'disabled'
    });

  } catch (error) {
    next(error);
  }
});

export default router;
