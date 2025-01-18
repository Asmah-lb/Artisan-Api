const express = require("express");

const profileController = require("../controller/profileController");
const { restrictedRoute } = require("../middleware/restrictedRoute");
const { protectedRoute } = require("../middleware/protectedRoute");

const router = express.Router();

//===Unprotected route===//
router.get("/", profileController.getAllProfile);

//====Protected and restricted routes======//
router.post(
  "/",
  protectedRoute,
  restrictedRoute,
  profileController.createProfile
);
router.delete(
  "/:id",
  protectedRoute,
  restrictedRoute,
  profileController.deleteProfile
);
router.patch(
  "/:id",
  protectedRoute,
  restrictedRoute,
  profileController.updateProfile
);

module.exports = router;
