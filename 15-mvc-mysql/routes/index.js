const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// 기본주소
//GET /
router.get("/", controller.main);

//GET /visitors
router.get("/visitors", controller.visitor);

//POST /visitor
router.post("/visitor", controller.post_visitor);
module.exports = router;
