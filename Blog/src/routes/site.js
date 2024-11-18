const express = require("express");
const router = express.Router();
const siteController = require("../App/Controllers/SiteController");

router.use("/form", siteController.form);
router.use("/", siteController.index);

module.exports = router;
