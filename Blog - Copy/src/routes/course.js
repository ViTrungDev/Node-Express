const express = require("express");
const router = express.Router();
const CourseController = require("../App/Controllers/CourseController");

router.get("/create", CourseController.create);
router.post("/store", CourseController.store);
router.get("/:id/edit", CourseController.edit);
router.put("/:id", CourseController.update);
router.delete("/:id", CourseController.destroy);
router.get("/:slug", CourseController.show);
router.get("/api/courses", CourseController.getCourses);

module.exports = router;
