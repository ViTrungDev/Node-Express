// function connect to db
const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Node_education_dev");
    console.log("Connect success!!!");
  } catch (error) {
    console.error("Connect not success!!!");
  }
}
module.exports = { connect };
