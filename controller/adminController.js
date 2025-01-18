const bcrypt = require("bcrypt");


const Admin = require("../model/adminModel.js");

exports.createAdmin = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    //Checking if email exisit
  const isEmailExisting = await Admin.findOne({ email });
  if (isEmailExisting) {
    return res.json({ message: "Email is already taken!" });
  }

    // Hashing/Hidden password//
    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);

    //Creating User
    const createdAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log(req.body);

    res.status(200).json({
      staus: "success",
      message: "Successful",
      data: {
        createdAdmin,
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateProfile = async function (req, res) {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );

    res.status(200).json({
      status: "success",
      message: "Profile Updated Successfully!",
      data: {
        updatedAdmin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
