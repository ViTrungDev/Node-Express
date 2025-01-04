const Course = require("../Models/Course");
const {
  mutipMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MeController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((course) =>
        res.render("me/storedCourses", {
          course: mutipMongooseToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
