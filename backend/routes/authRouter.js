const express = require('express');
const router = express.Router();

const requireAuth = require("../middleware/requireAuth");

const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/check-auth', requireAuth, authController.checkAuth);

module.exports = router;