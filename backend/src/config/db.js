const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('MONGODB_URI not set — skipping DB connection. Submissions will only be emailed, not stored.');
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    // Do not crash the server — contact form can still work via Brevo-only
    // if DB is temporarily unavailable. Remove this behavior if you want
    // DB to be mandatory.
  }
}

module.exports = connectDB;
