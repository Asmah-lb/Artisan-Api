const bcrypt = require("bcrypt");
const Admin = require("../model/adminModel.js");


exports.createAdmin = async function (req, res) {
  try {
    const { name, email, password, role } = req.body;

    //Checking if email exisit
  const isEmailExisting = await Admin.findOne({ email });
  if (isEmailExisting) {
    return res.json({ message: "Email is already taken!" });
  }

    // Hashing/Hidden password//
    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);

    //Creating Admin
    const createdAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    console.log(req.body);

    res.status(200).json({
      staus: "success",
      message: "New admin created!",
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

exports.getAllAdmins = async function (req, res) {
  try {
    const Admins = await Admin.find();

    res.status(200).json({
      status: "success",
      data: {
        Admins,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteAdmin = async function (req, res) {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Admin Deleted...!",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};



exports.updateAdmin = async function (req, res) {
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
      message: "Admin Updated!",
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
