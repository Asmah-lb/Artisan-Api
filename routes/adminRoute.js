const express = require("express");

const adminController = require("../controller/adminController");
const authController = require("../controller/authController");
const { restrictedRoute } = require("../middleware/restrictedRoute");
const { protectedRoute } = require("../middleware/protectedRoute");

const router = express.Router();

router.post("/", protectedRoute, restrictedRoute, adminController.createAdmin);
router.get("/", protectedRoute, restrictedRoute, adminController.getAllAdmins);

router.post("/login", authController.loginAdmin);
router.post("/logout", authController.logoutUser);

router.patch("/:id", protectedRoute, adminController.updateAdmin);
router.delete("/:id", protectedRoute, adminController.deleteAdmin);

module.exports = router;
