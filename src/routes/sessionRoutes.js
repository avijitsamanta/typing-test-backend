const express = require("express");
const Session = require("../models/Session");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// POST /api/sessions → Save a Typing Session (Requires Auth)
router.post("/", authMiddleware, async (req, res) => {
  try {
    console.log(req.body);
    const newSession = new Session({ ...req.body, userId: req.userId });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/sessions/:userId → Retrieve All Sessions of a User (Requires Auth)
router.get("/:userId", authMiddleware, async (req, res) => {
  if (req.userId !== req.params.userId) return res.status(403).json({ message: "Unauthorized" });

  try {
    const sessions = await Session.find({ userId: req.params.userId });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/analysis/:sessionId → Analyze Typing Patterns (Requires Auth)
router.get("/analysis/:sessionId", authMiddleware, async (req, res) => {
  try {
    const session = await Session.findById(req.params.sessionId);
    if (!session) return res.status(404).json({ message: "Session not found" });

    res.json({
      totalErrors: session.totalErrors,
      errorWords: session.errorWords,
      typingDurations: session.typingDurations,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
