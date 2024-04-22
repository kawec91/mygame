const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getUserList,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/userlist", protect, getUserList);

module.exports = router;
