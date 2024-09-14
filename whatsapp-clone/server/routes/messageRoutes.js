const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Send message
router.post('/send', async (req, res) => {
  try {
    const { sender, receiver, content, mediaUrl, mediaType } = req.body;
    const newMessage = new Message({ sender, receiver, content, mediaUrl, mediaType });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get messages
router.get('/get/:sender/:receiver', async (req, res) => {
  try {
    const { sender, receiver } = req.params;
    const messages = await Message.find({ sender, receiver }).sort('timestamp');
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
