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
