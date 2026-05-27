import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { contactRouter } from './controllers/contact.controller.js';

// ── Load env ──
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5174';

const app = express();

// ── Security ──
app.use(helmet());
app.use(cors({
  origin: CORS_ORIGIN.split(',').map(o => o.trim()),
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json({ limit: '16kb' }));

// ── Rate Limiting ──
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,                    // 5 emails per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    data: null,
    meta: { error: 'Too many requests. Please try again later.' },
  },
});

// ── Routes ──
app.use('/api/contact', contactLimiter, contactRouter);

// ── Health check ──
app.get('/api/health', (_req, res) => {
  res.json({ success: true, data: { status: 'ok' }, meta: { timestamp: Date.now() } });
});

// ── Start ──
app.listen(PORT, () => {
  console.log(`✅ Rudreksh API running on port ${PORT}`);
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_xxxxxxxxx') {
    console.warn('⚠️  RESEND_API_KEY is not set! Emails will fail. Update server/.env');
  }
});
