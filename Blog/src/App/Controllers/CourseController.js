const Course = require("../Models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const mongoose = require("mongoose");

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
  create(req, res, next) {
    res.render("course/create");
  }

  // [POST] /course/store
  store(req, res, next) {
    console.log("Request Body:", req.body);

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
    console.log("Request Params:", req.params);
    console.log("Request Body:", req.body);

    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  // [DELETE] /course/:id/destroy
  destroy(req, res, next) {
    const courseId = req.params.id.trim();
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).send("Invalid ID format");
    }
    Course.deleteOne({ _id: courseId }) // Permanently delete the document
      .then(() => res.status(200).send("Course deleted"))
      .catch(next);
  }

  // [PATCH] /course/:id/restore
  restore(req, res, next) {
    const courseId = req.params.id.trim();
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).send("Invalid ID format");
    }
    Course.restore({ _id: courseId })
      .then(() => res.status(200).send("Course restored"))
      .catch(next);
  }
}

module.exports = new CourseController();
