const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, maxLength: 255, minLength: 1 },
  description: { type: String, maxLength: 600, minLength: 1 },
  img: { type: String, maxLength: 600, minLength: 1 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", ProductSchema);
