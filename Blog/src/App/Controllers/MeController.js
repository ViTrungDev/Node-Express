const Course = require("../Models/Course");
const {
  mutipMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    // Use Promise.all to get both the course and the deleteCount (sử lý bất đồng)
    Promise.all([
      Course.find({}),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([courses, deletedCount]) =>
        res.render("me/storedCourses", {
          deletedCount,
          courses: mutipMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // [GET] /strash/courses
  strashCourses(req, res, next) {
    Course.findDeleted({ deletedAt: { $ne: null } })
      .then((course) =>
        res.render("me/strashCourses", {
          course: mutipMongooseToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
