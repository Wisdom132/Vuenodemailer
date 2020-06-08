const router = require("express").Router();
const userController = require("./controller");

router.post("/register", userController.registerNewUser);


module.exports = router;