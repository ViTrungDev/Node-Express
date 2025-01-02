const express = require("express");
const router = express.Router();
const productRouter = require("./Product");

// Route cho đường dẫn gốc "/"
router.use("/", productRouter);

module.exports = router;
