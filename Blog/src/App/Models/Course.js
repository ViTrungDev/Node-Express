const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
<<<<<<< HEAD
=======
// import mongoose-slug
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
>>>>>>> fig-bug

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
<<<<<<< HEAD

Course.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

=======
mongoose.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
>>>>>>> fig-bug
module.exports = mongoose.model("Course", Course);
