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
  // [DELETE] /course/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // [PATCH] /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // [DELETE] /course/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // [POST] /course/handle-form-action
  handleFormAction(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json({ message: "Action is invalid!" });
    }
  }
}

module.exports = new CourseController();
