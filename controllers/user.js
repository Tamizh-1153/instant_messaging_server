const User = require('../models/user')

const register = async(req,res) => {
    let {email} =req.body

    const userExists = await User.findOne({email})
    if(!userExists) {
        const user = await User.create({...req.body})
        res.json({user:{email:user.email}})
    }else {
        res.json({message:'User already exists'})
    }
}

const getUserInfo = async(req, res) => {
    const {email}=req.body    
    try {
        const user= await User.findOne({email})
        res.json({user,message:'User info sent'})
    } catch (error) {
        res.json(error.message)
    }
}

const getUserByID = async(req, res) => {
    const {id}=req.body  
    try {
        const user= await User.findOne({_id:id})
        res.json({user,message:'User info sent'})
    } catch (error) {
        res.json(error.message)
    }
}

const getAllUsersInfo = async(req, res) => {
    try {
        const users = await User.find({},{_id:1,name:1,email:1,picture:1})
        res.json(users)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    register,
    getUserInfo,
    getUserByID,
    getAllUsersInfo
}