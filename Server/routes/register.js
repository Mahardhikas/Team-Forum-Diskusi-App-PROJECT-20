const express = require('express');
const router = express.Router();
const registerController = require('../controller/RegisterController');
const verifyUser = require('../library/verify');

router.post('/', verifyUser.isLogout, registerController.saveRegister);

module.exports = router;
