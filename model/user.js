const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is Required']
    },
    temp:{
        type:Number,
        required:[true,'Tempreture is Required']
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const User = mongoose.model('user',userSchema)
module.exports = User;