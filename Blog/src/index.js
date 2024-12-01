const path = require("path");
const express = require("express");
const app = express();
// import morgan
const morgan = require("morgan");
// import Handlebars
const handlebars = require("express-handlebars");
const hbs = require("hbs");
const db = require("./config/db/index");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// connect db
db.connect();

const port = 8080;
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

// use morgan
app.use(morgan("combined"));

// using json
const courseRouter = require("./routes/course");
// Middleware để xử lý dữ liệu từ request
app.use(express.json()); // Xử lý dữ liệu JSON
app.use(express.urlencoded({ extended: true })); // Xử lý form data (URL-encoded)

// Sử dụng router cho các route liên quan đến khóa học
app.use("/course", courseRouter);

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    // rút ngắn tên đuôi file handlebars thành hbs
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "resources/views/layouts"), // Đường dẫn đến layouts
    partialsDir: path.join(__dirname, "resources/views/partials"),
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.set("partials", path.join(__dirname, "resources/partials"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
