const express = require("express");
const { UserController } = require('../../controllers')


const router = express.Router();


router.get('/signin', UserController.signin);
router.post('/signup', UserController.signup);

// router.post('/signup', AuthRequestMiddlewares.validateAuthRequest, UserController.signup);
// router.post('/signin', AuthRequestMiddlewares.validateAuthRequest, UserController.signin);

router.get('/', UserController.getUser);
router.patch('/pincode', UserController.setPincode);
router.get('/pincode',  UserController.checkPincode);

module.exports = router;

