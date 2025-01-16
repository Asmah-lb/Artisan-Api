
const mongoose = require ('mongoose')

const adminSchema = new mongoose.Schema({
    role:{
        type:String,
        enum:["admin", "subadmin", "moderator","user"],
        default: "user"
    },
    name:{type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    }
})
const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin;