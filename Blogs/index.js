const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const db = require("./src/model/db");
const route = require("./src/router");

const app = express();
const port = 3000;

// Kết nối cơ sở dữ liệu
db.connect();

// Cấu hình Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "src", "views")); // Sửa "view" thành "views"

// Cấu hình router
app.use("/", route);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
