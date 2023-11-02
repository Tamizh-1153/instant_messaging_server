
const Message = require("../models/message")

const addMessage = async (req, res) => {
  const { chatID, senderID, text } = req.body
  try {
    const message = await Message.create({ chatID, senderID, text })
    res.json(message)
  } catch (error) {
    res.json(error.message)
  }
}

const getMessages = async (req, res) => {
    const {id} = req.params
    try {
        const messages = await Message.find({chatID: id})
        res.json(messages)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
  addMessage,
  getMessages
}
