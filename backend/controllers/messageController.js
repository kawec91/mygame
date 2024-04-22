const asyncHandler = require("express-async-handler");
const Conversation = require("../models/conversationModel");
const Message = require("../models/messasgeModel");

// @desc    Send Message
// @route   POST /api/messages/send/:id
// @access  Privat
const sendMessage = asyncHandler(async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    const { id: receiverId } = req.params;

    //Find Conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    //If Conversation not exist - create one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    //Create Message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    //Push Message to Conversation Messages list
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400);
    throw new Error("Something went wrong. I can't send that message.");
  }
});

module.exports = { sendMessage };
