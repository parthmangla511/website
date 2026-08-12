const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    role: { type: String, required: true, enum: ['Student', 'Sponsor', 'Mentor', 'Other'] },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Contact', contactSchema);
