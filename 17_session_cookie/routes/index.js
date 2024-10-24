const express = require("express");
const router = express.Router();
const controller = require("../controller/Clogin");

router.get("/", controller.index);
router.get("/login", controller.get_login);

router.post("/login", controller.post_login);
router.get("/logout", controller.get_logout);

module.exports = router;
