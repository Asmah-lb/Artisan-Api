const jwt = require("jsonwebtoken");
const Admin = require("../model/adminModel");

exports.protectedRoute = async function (req, res, next) {
  
  //===== Checking for token===/
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      token = req.cookies.jwt;
    }

    console.log("Token received:", token);

    //=====If token is not found====//
    if (!token) {
      return res.status(401).json({
        message: "You are not signed in!",
      });
    }

    //========verify token=========//
    const decoded = jwt.verify(token, process.env.JWT_SECRET_STRING);
    req.user = {
      _id: decoded.id,
    };

    //setting  the current user/admin=======//
    const currUser = await Admin.findById(decoded.id);
    if (!currUser) {
      return res.status(401).json({
        message: "User not found!",
      });
    }
    req.user = currUser;
    next();


  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message || "You are not authorised",
    });
  }
};
