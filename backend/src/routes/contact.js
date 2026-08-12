const express = require('express');
const rateLimit = require('express-rate-limit');
const { contactValidationRules, validateContact } = require('../middleware/validateContact');
const { submitContactForm } = require('../controller/contactController');

const router = express.Router();

// Basic abuse protection: 5 submissions per 15 min per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many submissions. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/contact
router.post('/', contactLimiter, contactValidationRules, validateContact, submitContactForm);

module.exports = router;
