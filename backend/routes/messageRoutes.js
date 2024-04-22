const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

router.post("/send/:id", protect, sendMessage);

module.exports = router;
