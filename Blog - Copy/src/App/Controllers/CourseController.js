const Course = require("../Models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /course/create
  create(req, res) {
    res.render("course/create");
  }

  // [POST] /course/store
  store(req, res, next) {
    const course = new Course(req.body);

    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("course/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [PUT] /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /course/:id
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [GET] /api/courses
  async getCourses(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const skip = (page - 1) * limit;

      const courses = await Course.find({}).skip(skip).limit(limit);
      const totalItems = await Course.countDocuments();

      res.json({
        courses: courses.map((course) => mongooseToObject(course)),
        currentPage: page,
        totalPages: Math.ceil(totalItems / limit),
      });
    } catch (error) {
      console.error("Error in getCourses:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new CourseController();
