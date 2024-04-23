const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessages,
  getConversations,
} = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getConversations);
router.get("/conversation/:id", protect, getMessages);
router.post("/send/:id", protect, sendMessage);

module.exports = router;
