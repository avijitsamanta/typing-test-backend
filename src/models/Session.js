const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  wpm: { type: Number, required: true },
  accuracy: { type: Number, required: true },
  totalErrors: { type: Number, required: true },
  errorWords: { type: [String], required: true },
  typingDurations: { type: [Number], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Session", SessionSchema);
