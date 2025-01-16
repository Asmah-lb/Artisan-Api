const express = require("express");

const profileController = require('../controller/profileController')


const router = express.Router();


router.post("/", profileController.createProfile);
router.get('/', profileController.getAllProfile);


router.delete('/:id', profileController.deleteProfile);
router.patch('/:id', profileController.updateProfile);


module.exports = router;