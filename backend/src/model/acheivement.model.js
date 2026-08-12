const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema(
  {
    month: {
      type: Date,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    winnerName: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tagname: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;
