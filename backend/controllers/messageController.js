const asyncHandler = require("express-async-handler");
const Conversation = require("../models/conversationModel");
const Message = require("../models/messasgeModel");
const User = require("../models/userModel");

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

    //TODO: Real Time - WebSocet functionality

    //Save Message in Conversation [Save secound after first]
    // await conversation.save();
    // await newMessage.save();

    //FIX
    //Save Message and Conversation at the same time (Parallel)
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong. I can't send that message.");
  }
});

// @desc    Get Messages With User X
// @route   GET /api/messages/conversation/:id
// @access  Privat
const getMessages = asyncHandler(async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    //Find participants in Conversation collection and show messages (populate method)
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    //When conversation didnt exist return empty array
    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong. I can't read this chat.");
  }
});

// @desc    Get Conversations
// @route   GET /api/messages/
// @access  Privat
const getConversations = asyncHandler(async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    //Get Users Data without password
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500);
    throw new Error("Internal server error");
  }
});

module.exports = { sendMessage, getMessages, getConversations };
