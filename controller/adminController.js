  
  const Admin = require("../model/adminModel")

  exports.createAdmin = async function (req,res) {
    try{
      // const{name,email,password}=req.body;
      const createdAdmin = await Admin.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
      });
      console.log(req.body);

      res.status(200).json({
        staus:'success',
        message:'Successful',
        data:{
          admin:createdAdmin,
        },
        alert:'Successful'
      })

    }catch(err){
      res.status(400).json({
        status:'fail',
        message: err.message,
      });

    }
  };

  exports.updateProfile = async function (req, res) {
    try{
      const admin = await Admin.findByIdAndUpdate(
        req.admin.id,{
          name: req.body.name,
          email:req.body.email,
          password:req.body.password,
        },
        {
          runValidators:true,
          new:true,
        }
      );
      res.status(200).json({
        status: 'success',
        message:'Profile Updated Successfully!',
        data:{
          user,
        },
      })
    } catch (err){
      res.status(400).json({
        status:'fail',
        message: err.message,
      })
    };
        
  };