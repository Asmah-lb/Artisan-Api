
const Profile = require('../model/profileModel');

exports.createProfile = async function (req, res) {
    try{
        const{name,job,email} = req.body;

        const createdProfile = await Profile.create({
            name,
            email,
            job,   
        });
        console.log(req.body)
        res.staus(200).json({
            staus:"success",
            message:'Profile successfully created!',
            data:{
              createdProfile,
            },
        });
    } 
    catch (err){
        res.status(400).json({
            status:'fail',
            message: err.message,
        })
    };
    
}

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
      const profile = await Profile.findByIdAndDelete(req.params.id);
  
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
      const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
      });
  
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