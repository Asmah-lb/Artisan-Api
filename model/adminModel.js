
const mongoose = require ('mongoose')

const adminModel = new mongoose.Schema({
    role:{
        type:String,
        enum:["admin", "subadmin", "moderator"],
        default: "admin"
    },
})
const Admin= mongoose.model
module.exports = Admin