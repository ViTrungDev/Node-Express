const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const router = require("../../routes/course");
// app.use("/course", router);

const Course = require("../Models/Course");
const { mongooseToObject } = require("../../util/mongoose");

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

  // store(req, res, next) {
  //   res.json({ message: "Post successful", data: req.body });
  //   // res.send("post successful!!");
  // }
}

module.exports = new CourseController();
