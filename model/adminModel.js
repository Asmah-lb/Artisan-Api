const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["admin", "subadmin", "moderator"],
    default: "subadmin",
  },
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    lowercase:true,
    required: [true, "Email is required"],
    trim:true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
