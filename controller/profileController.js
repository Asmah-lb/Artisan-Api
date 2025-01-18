const Profile = require("../model/profileModel");

exports.createProfile = async function (req, res) {
  try {
    const createdProfile = await Profile.create({
      name: req.body.name,
      job: req.body.job,
      email: req.body.email,
    });
    console.log(req.body);

    res.status(201).json({
      status: "success",
      message: "Profile successfully created...",
      data: {
        post: createdProfile,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllProfile = async function (req, res) {
  try {
    const profiles = await Profile.find();

    res.status(200).json({
      status: "success",
      data: {
        profiles,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteProfile = async function (req, res) {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Profile Deleted...!",
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
    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );

    res.status(200).json({
      status: "success",
      message: "Profile Updated!",
      data: {
        updatedProfile,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
