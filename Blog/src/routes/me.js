const express = require("express");
const router = express.Router();
const meController = require("../App/Controllers/MeController");

router.get("/stored/courses", meController.storedCourses);
<<<<<<< HEAD
router.get("/trash/courses", meController.trashCourse);
=======
router.get("/strash/courses", meController.strashCourses);
>>>>>>> fig-bug

module.exports = router;
