const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessages,
} = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

router.get("/:id", protect, getMessages);
router.post("/send/:id", protect, sendMessage);

module.exports = router;
