const express = require("express");

const profileController = require("../controller/profileController");
const {protectedRoute} = require("../middleware/protectedRoute");

const router = express.Router();

//===Unprotected route===//
router.get("/", profileController.getAllProfile);
router.get("/:id", profileController.getProfileById);

//====Protected and restricted routes======//
router.post(
  "/",
  protectedRoute,
  profileController.createProfile
);
router.delete(
  "/:id",
  protectedRoute,
  profileController.deleteProfile
);
router.patch(
  "/:id",
  protectedRoute,
  profileController.updateProfile
);

module.exports = router;
