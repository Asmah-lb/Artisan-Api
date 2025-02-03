const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  job: {
    type: String,
    required: [true, "Job is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  yearsOfExperience: {
    type: String,
  },
});

// profileSchema.set('toJSON', {
//   transform: function (doc, ret) {
//     ret.id = ret._id.toString();  // Convert _id to string and add it as 'id'
//     delete ret._id;  // Remove the original _id field if not needed
//     return ret;
//   }
// });

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
