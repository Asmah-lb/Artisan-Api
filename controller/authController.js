const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require('../model/adminModel');

exports.loginAdmin = async function (req, res) {
  try {

    // Finding Admin by email
    const { email, password } = req.body;
    const adminAccount = await Admin.findOne({ email });

    //comparing password
    const comparedPassword = await bcrypt.compare(password, adminAccount.password);
    console.log(comparedPassword);

    if (!adminAccount.email || !comparedPassword) {
      return res.json({
        message: "email or password incorrect!",
      });
    }
    // generating token
    const token = jwt.sign(
      { id: adminAccount._id },
      process.env.JWT_SECRET_STRING,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.status(200).json({
      status: "success",
      message: " Login successfully!",
      data: {
        admin: adminAccount,
      },
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};


exports.logoutUser = function (req, res) {
  try {
    // Clear the JWT cookie
    res.clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "strict" });
    
    res.status(200).json({
      status: "success",
      message: "Logout Successfully!",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};


