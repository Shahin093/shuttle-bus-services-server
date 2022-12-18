const express = require("express");
const userController = require("../controller/user.controller");
const verifyToken = require("../middleware/verifyToken");
// const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
router.put('/user/:id', userController.userChecked)
router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/me', verifyToken, userController.getMe)
module.exports = router;