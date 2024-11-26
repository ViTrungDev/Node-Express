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
    // res.json(req.body);
    console.log("videoID" + req.body);
    // Kiểm tra dữ liệu đầu vào
    if (!req.body.videoID) {
      return res.status(400).send("videoID is required");
    }
    // Tạo dữ liệu khóa học từ dữ liệu form
    const formData = req.body;
    formData.image = `https://files.fullstack.edu.vn/f8-prod/${req.body.videoID}/6.png`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.send("Create success!!!");
      })
      .catch(next);
  }
}

module.exports = new CourseController();
