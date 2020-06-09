const router = require("express").Router();
const userController = require("./controller");

router.post("/", userController.registerNewUser);

router.get("/", userController.getAllUsers);

module.exports = router;