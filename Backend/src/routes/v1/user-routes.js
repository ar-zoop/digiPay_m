const express = require("express");
const { UserController } = require('../../controllers')


const router = express.Router();



router.post('/', UserController.createUser);
router.get('/', UserController.getUser);

module.exports = router;

