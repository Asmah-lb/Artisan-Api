// const Admin = require("../model/adminModel")

exports.restrictedRoute = function (req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      status: "fail",
      message: "You do not have access!",
    });
  }
};

// exports.allowedRoles = function (req, res, next){
//   const isAllowedRoles =['admin','subadmin'];
//   if(isAllowedRoles.includes(req.user.role)){
//     next();
//   }else[
//     res.status(400).json({
//       status:"fail",
//       message:"You don't have access!"
//     })
//   ]
// }
