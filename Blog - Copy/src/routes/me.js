const express = require("express");
const router = express.Router();
const meController = require("../App/Controllers/MeController");

router.get("/stored/courses", meController.storedCourses);

module.exports = router;
