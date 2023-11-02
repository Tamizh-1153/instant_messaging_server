const Chat = require("../models/chat")

const createChat = async (req, res) => {
  try {
    const newChat = await Chat.create({
      members: [req.body.senderID, req.body.receiverID],
    })
    res.json(newChat)
  } catch (error) {
    res.json(error.message)
  }
}

const userChats = async (req, res) => {
  try {
    const chat = await Chat.find({
      members: { $in: [req.params.id] },
    })
    res.json(chat)
  } catch (error) {
    res.json(error.message)
  }
}

const findChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: { $all: [req.params.firstID, req.params.secondID] },
    })
    res.json(chat)
  } catch (error) {
    res.json(error.message)
  }
}

module.exports = {
  createChat,
  userChats,
  findChat
}
