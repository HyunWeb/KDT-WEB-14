const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.main);
router.get("/visitors", controller.get_visitor);
router.post("/visitor", controller.post_visitor);

module.exports = router;
