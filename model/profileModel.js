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

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
