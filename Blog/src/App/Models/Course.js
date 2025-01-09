const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
// import mongoose-slug
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

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
mongoose.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Course", Course);
