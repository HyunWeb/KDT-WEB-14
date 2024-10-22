const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// localhost:PORT/user - 기본경로

// router.요청메소드

// GET /user
router.get("/", controller.user);

// POST /user/login
router.post("/login", controller.login);

module.exports = router;
