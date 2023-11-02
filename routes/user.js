const express = require('express')
const router = express.Router()


const { register, getUserInfo, getUserByID, getAllUsersInfo } = require('../controllers/user')
const jwtCheck = require('../config/auth0Config')


router.route('/register').post(jwtCheck,register)
router.route('/user/info').post(jwtCheck,getUserInfo)
router.route('/user/info/id').post(jwtCheck,getUserByID)
router.route('/user/all').get(jwtCheck,getAllUsersInfo)



module.exports = router