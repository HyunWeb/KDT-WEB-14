const express = require("express");
const router = express.Router();
const controller = require("../controller/Cindex");

router.get("/", controller.getIndex);

router.get("/login", controller.get_login);

router.get("/signup", controller.get_signup);

router.post("/post_signup", controller.post_signup);

router.post("/post_login", controller.post_login);

router.post("/verify", controller.post_verify);

module.exports = router;
