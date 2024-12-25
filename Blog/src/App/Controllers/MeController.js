const Course = require("../Models/Course");
const {
  mutipMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((course) =>
        res.render("me/storedCourses", {
          course: mutipMongooseToObject(course),
        })
      )
      .catch(next);
  }
  // [GET] /me/trash/courses
  trashCourse(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render("me/trashCourses", {
          courses: mutipMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
