const express = require("express");

const adminController = require("../controller/adminController");
const authController = require("../controller/authController");
const { restrictedRoute } = require("../middleware/restrictedRoute");
const { protectedRoute } = require("../middleware/protectedRoute");

const router = express.Router();

router.post("/", adminController.createAdmin);
router.post("/login", authController.loginAdmin);

router.patch(
  "/:id",
  protectedRoute,
  restrictedRoute,
  adminController.updateProfile
);

module.exports = router;
