const express = require("express")
const router = express.Router()

const { addMessage, getMessages } = require("../controllers/message")

router.route('/add').post(addMessage)
router.route('/:id').get(getMessages)


module.exports =router