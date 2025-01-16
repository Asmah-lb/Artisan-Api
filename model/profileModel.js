 
 const mongoose = require ('mongoose');

 const profileSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true],
    },
    job:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type:Number,
    },
    address:{
        type:String,
    },
    yearsOfExperience:{
        type:Number
    }
 })

 const Profile = mongoose.model('Profile', profileSchema);
 module.exports = Profile;