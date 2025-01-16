const express = require("express");

const adminController = require('../controller/adminController')

const router = express.Router();

router.post("/", adminController.createAdmin);
router.patch('/update',adminController.updateProfile);




module.exports = router;