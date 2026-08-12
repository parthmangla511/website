const axios = require('axios');

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

/**
 * Sends the contact form submission to the organization's inbox via Brevo.
 * @param {{name: string, email: string, role: string, message: string}} data
 */
async function sendContactEmail(data) {
	if (!process.env.BREVO_API_KEY || !process.env.SENDER_EMAIL || !process.env.ORG_EMAIL) {
		const error = new Error('Brevo email settings are not configured');
		error.code = 'BREVO_NOT_CONFIGURED';
		throw error;
	}

  const { name, email, role, message } = data;

  const payload = {
    sender: {
      name: process.env.SENDER_NAME,
      email: process.env.SENDER_EMAIL,
    },
    to: [
      {
        email: process.env.ORG_EMAIL,
        name: process.env.ORG_EMAIL_NAME || 'Geek Room Team',
      },
    ],
    replyTo: {
      email,
      name,
    },
    subject: `New Contact Form Submission - ${role}`,
    htmlContent: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Us Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      </div>
    `,
  };

  const response = await axios.post(BREVO_API_URL, payload, {
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 10000,
  });

  return response.data;
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = { sendContactEmail };
