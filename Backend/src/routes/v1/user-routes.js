const express = require("express");
const { UserController } = require('../../controllers')


const router = express.Router();



router.post('/', UserController.createUser);
router.get('/', UserController.getUser);
router.patch('/pincode', UserController.setPincode);
router.get('/pincode',  UserController.checkPincode);

module.exports = router;

