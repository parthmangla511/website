const Contact = require('../model/contact.model');
const { sendContactEmail } = require('../services/brevoService');

async function submitContactForm(req, res) {
  const { name, email, role, message } = req.body;

  let savedContact;

  // 1. Persist to MongoDB (so we never lose a submission even if email fails)
  if (Contact.db.readyState === 1) try {
    savedContact = await Contact.create({ name, email, role, message });
  } catch (dbError) {
    console.error('MongoDB save error:', dbError.message);
    // If DB isn't connected/configured, continue — email is still attempted below.
  }

  // 2. Send to organization via Brevo
  try {
    await sendContactEmail({ name, email, role, message });
    if (savedContact) {
      savedContact.emailSent = true;
      await savedContact.save();
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. Our team will get back to you shortly.',
    });
  } catch (error) {
    const brevoError = error.response?.data;
    console.error('Brevo API error:', brevoError || error.message);

    return res.status(error.code === 'BREVO_NOT_CONFIGURED' ? 503 : 502).json({
      success: false,
      message: savedContact
        ? 'Your message was saved, but sending the notification email failed. Our team will still follow up.'
        : 'Failed to send your message. Please try again later.',
      ...(process.env.NODE_ENV !== 'production' && { debug: brevoError || error.message }),
    });
  }
}

module.exports = { submitContactForm };
