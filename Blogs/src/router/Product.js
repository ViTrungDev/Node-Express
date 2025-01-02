const express = require("express");
const router = express.Router();
const HomeController = require("../Controller/HomeController");

router.get("/", HomeController.index);
router.get("/:slug", HomeController.show);
module.exports = router;
