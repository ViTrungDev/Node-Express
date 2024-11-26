const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, minLength: 1, require: true },
    description: { type: String, maxLength: 600, minLength: 1 },
    img: { type: String, maxLength: 600, minLength: 1 },
    videoID: { type: String, maxLength: 600, minLength: 1 },
    level: { type: String, maxLength: 600, minLength: 1 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
