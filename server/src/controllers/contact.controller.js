import { Router } from 'express';
import { sendContactEmail } from '../services/email.service.js';

export const contactRouter = Router();

/**
 * POST /api/contact
 * Receives contact form data and sends email via Resend.
 */
contactRouter.post('/', async (req, res) => {
  try {
    const { fullName, phone, email, service, date, message } = req.body;

    // Basic server-side validation
    if (!fullName || fullName.length < 2) {
      return res.status(400).json({
        success: false,
        data: null,
        meta: { error: 'Name must be at least 2 characters.' },
      });
    }

    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        data: null,
        meta: { error: 'Please provide a valid 10-digit Indian mobile number.' },
      });
    }

    if (!service) {
      return res.status(400).json({
        success: false,
        data: null,
        meta: { error: 'Please select a treatment.' },
      });
    }

    const result = await sendContactEmail({ fullName, phone, email, service, date, message });

    res.json({
      success: true,
      data: { 
        id: result.doctorEmailId,
        patientEmailSent: result.patientEmailSent 
      },
      meta: { timestamp: Date.now() },
    });
  } catch (error) {
    console.error('Contact email error:', error);
    res.status(500).json({
      success: false,
      data: null,
      meta: { error: 'Failed to send email. Please try again later.' },
    });
  }
});
