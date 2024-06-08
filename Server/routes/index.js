var express = require('express');
var router = express.Router();
var loginController = require('../controller').login;
var homeController = require('../controller').home;
var verifyUser = require('../library/verify');

// Rute untuk halaman utama, hanya jika pengguna belum login
router.get('/', verifyUser.isLogout, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Rute untuk halaman home, memerlukan pengguna untuk login
router.get('/home', verifyUser.isLogin, homeController.home);

module.exports = router;
