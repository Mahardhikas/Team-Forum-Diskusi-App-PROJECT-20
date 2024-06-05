const router = require('express').Router();
const registerController = require('../controller/RegisterController');
const verifyUser = require('../library/verify');

router.post('/', verifyUser.isLogout, (req, res, next) => {
    console.log('Register endpoint hit'); // Log untuk memastikan rute dipanggil
    next();
}, registerController.saveRegister);

module.exports = router;
