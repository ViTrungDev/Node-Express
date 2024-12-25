const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, minLength: 1, require: true },
    description: { type: String, maxLength: 600, minLength: 1 },
    image: { type: String, maxLength: 600, minLength: 1 },
    videoID: { type: String, maxLength: 600, minLength: 1 },
    level: { type: String, maxLength: 600, minLength: 1 },
    slug: { type: String, slug: `name`, unique: true },
  },
  {
    timestamps: true,
  }
);

Course.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Course", Course);
