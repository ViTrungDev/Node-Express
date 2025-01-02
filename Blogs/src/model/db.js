const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Product_Demo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

module.exports = { connect };
