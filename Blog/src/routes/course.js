const express = require('express');
const router = express.Router();
const CourseController = require('../App/Controllers/CourseController');
// const CourseController = require("../App/Controllers/CourseController");

router.use('/:slug', CourseController.show);

module.exports = router;
