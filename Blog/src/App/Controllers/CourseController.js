const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const router = require("../../routes/course");
// app.use("/course", router);

const Course = require("../Models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { Model } = require("mongoose");

class CourseController {
  // [GET]: course/show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  // [GET] course/create
  create(req, res, next) {
    res.render("course/create");
  }

  // [GET] course/store
  store(req, res, next) {
    console.log(req.body); // Kiểm tra req.body có chứa dữ liệu không

    const { name, description, image, videoID, level, timestamps } = req.body;

    if (!name || !description || !image || !videoID || !level) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const course = new Course({
      name: name,
      description: description,
      image: image,
      videoID: videoID,
      level: level,
      timestamps: timestamps || new Date(), // Set default timestamp if not provided
    });

    course
      .save()
      .then(() => {
        // chuyển hướng khi tạo thành công
        res.redirect("/");
        // res.send("Create success!!!");
      })
      .catch(next);
  }
  // [GET] course/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("course/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
  // [PUT] course/update
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
