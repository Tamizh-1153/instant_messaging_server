const express = require('express')
const router = express.Router()

const { createChat, userChats, findChat } = require('../controllers/chat')

router.route('/create').post(createChat)
router.route('/:id').get(userChats)
router.route('/find/:firstID/:secondID').get(findChat)


module.exports = router