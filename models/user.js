const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a valid email address"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email address",
    ],
    unique: true,
  },
  token:{
    type:String
  },
  name:{
    type:String
  },
  picture:{
    type:String
  }
})

module.exports = mongoose.model('User', userSchema)