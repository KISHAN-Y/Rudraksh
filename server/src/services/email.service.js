import { Resend } from 'resend';

// Lazy-init so the server doesn't crash at import if the key is missing
let resend = null;
const getResend = () => {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key || key === 're_xxxxxxxxx' || key.startsWith('re_xxxx')) {
      throw new Error('RESEND_API_KEY is not configured. Update server/.env');
    }
    resend = new Resend(key);
  }
  return resend;
};
// ── Production Configurations ──
// For local testing (commented out):
// const DOCTOR_EMAIL = 'kishanyadav200903@gmail.com';
// const FROM_EMAIL = 'Rudreksh Dental <onboarding@resend.dev>';

// For production/testing:
// Note: Since you don't have a custom domain yet, you must use 'onboarding@resend.dev'
// and send ONLY to your verified account email (kishanyadav200903@gmail.com).
const DOCTOR_EMAIL = process.env.DOCTOR_EMAIL || 'kishanyadav200903@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Rudreksh Dental <onboarding@resend.dev>';

/**
 * Send both emails in parallel:
 * 1. Notification to Doctor about new appointment
 * 2. Confirmation to Patient that their booking is received
 */
export const sendContactEmail = async (formData) => {
  const { fullName, phone, email, service, date, message } = formData;
  const client = getResend();

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    : 'Not specified';

  // ── Email 1: Doctor notification ──
  const doctorHtml = `
    <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fbff; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #5AACE0, #1565A8); padding: 28px 32px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">🦷 New Appointment Request</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Rudreksh Dental Clinic</p>
      </div>
      <div style="padding: 28px 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #4A6278; font-size: 13px; width: 140px; vertical-align: top;">Patient Name</td>
            <td style="padding: 10px 0; color: #1A2C3D; font-weight: 600; font-size: 14px;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #4A6278; font-size: 13px; vertical-align: top;">Phone</td>
            <td style="padding: 10px 0; color: #1A2C3D; font-weight: 600; font-size: 14px;">
              <a href="tel:+91${phone}" style="color: #5AACE0; text-decoration: none;">+91 ${phone}</a>
            </td>
          </tr>
          ${email ? `
          <tr>
            <td style="padding: 10px 0; color: #4A6278; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; color: #1A2C3D; font-weight: 600; font-size: 14px;">
              <a href="mailto:${email}" style="color: #5AACE0; text-decoration: none;">${email}</a>
            </td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; color: #4A6278; font-size: 13px; vertical-align: top;">Treatment</td>
            <td style="padding: 10px 0;">
              <span style="background: #E3F2FD; color: #1565A8; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${service}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #4A6278; font-size: 13px; vertical-align: top;">Preferred Date</td>
            <td style="padding: 10px 0; color: #1A2C3D; font-weight: 600; font-size: 14px;">${formattedDate}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px 0; color: #4A6278; font-size: 13px; vertical-align: top;">Notes</td>
            <td style="padding: 10px 0; color: #1A2C3D; font-size: 14px; line-height: 1.6;">${message}</td>
          </tr>` : ''}
        </table>
      </div>
      <div style="background: #EBF4FC; padding: 16px 32px; text-align: center;">
        <p style="color: #8FA5B8; font-size: 12px; margin: 0;">Sent via Rudreksh Dental Clinic website</p>
      </div>
    </div>
  `;

  // ── Email 2: Patient confirmation ──
  const patientHtml = `
    <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fbff; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #4ABFAA, #5AACE0); padding: 28px 32px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">✅ Appointment Request Received!</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Rudreksh Dental Clinic</p>
      </div>
      <div style="padding: 28px 32px;">
        <p style="color: #1A2C3D; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
          Dear <strong>${fullName}</strong>,
        </p>
        <p style="color: #4A6278; font-size: 14px; line-height: 1.7; margin: 0 0 20px;">
          Thank you for choosing Rudreksh Dental Clinic! We have received your appointment request and our team will contact you shortly to confirm.
        </p>

        <div style="background: #ffffff; border: 1px solid #D8EEFF; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #1565A8; font-size: 14px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px;">Your Booking Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4A6278; font-size: 13px; width: 130px;">Treatment</td>
              <td style="padding: 8px 0;">
                <span style="background: #E3F2FD; color: #1565A8; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">${service}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A6278; font-size: 13px;">Preferred Date</td>
              <td style="padding: 8px 0; color: #1A2C3D; font-weight: 600; font-size: 13px;">${formattedDate}</td>
            </tr>
          </table>
        </div>

        <div style="background: #FFF8EE; border-left: 4px solid #F5A623; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 20px 0;">
          <p style="color: #1A2C3D; font-size: 13px; margin: 0; line-height: 1.6;">
            📞 Our team will call you at <strong>+91 ${phone}</strong> to confirm your appointment time. If you need to reach us sooner, call <a href="tel:+919725041336" style="color: #5AACE0; text-decoration: none; font-weight: 600;">+91 97250 41336</a>.
          </p>
        </div>

        <p style="color: #4A6278; font-size: 14px; line-height: 1.7; margin: 20px 0 0;">
          We look forward to seeing you!<br/>
          <strong style="color: #1A2C3D;">Dr. Malkesh Pankhaniya, BDS</strong><br/>
          <span style="color: #8FA5B8; font-size: 13px;">Rudreksh Dental Clinic</span>
        </p>
      </div>
      <div style="background: #EBF4FC; padding: 16px 32px; text-align: center;">
        <p style="color: #8FA5B8; font-size: 12px; margin: 0;">Rudreksh Dental Clinic • Gujarat, India</p>
      </div>
    </div>
  `;

  // Send both emails in parallel
  const emailPromises = [
    // → Doctor notification
    client.emails.send({
      from: FROM_EMAIL,
      to: DOCTOR_EMAIL,
      subject: `🦷 New Appointment: ${fullName} — ${service}`,
      html: doctorHtml,
      replyTo: email || undefined,
    }),
  ];
 
  // → Patient confirmation (only if they provided email)
  if (email) {
    emailPromises.push(
      client.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: '✅ Appointment Request Received — Rudreksh Dental Clinic',
        html: patientHtml,
      })
    );
  }

  const results = await Promise.allSettled(emailPromises);

  // Check if doctor email failed (critical)
  const doctorResult = results[0];
  if (doctorResult.status === 'rejected') {
    throw new Error(doctorResult.reason?.message || 'Failed to send notification email');
  }
  if (doctorResult.value?.error) {
    throw new Error(doctorResult.value.error.message || 'Failed to send notification email');
  }

  // Log patient email failure but don't block the response
  if (results[1]?.status === 'rejected' || results[1]?.value?.error) {
    console.warn('⚠️ Patient confirmation email failed:', results[1]?.reason || results[1]?.value?.error);
  }

  return {
    doctorEmailId: doctorResult.value?.data?.id,
    patientEmailSent: results[1]?.status === 'fulfilled' && !results[1]?.value?.error,
  };
};
