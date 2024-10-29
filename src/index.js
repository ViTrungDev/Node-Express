const path = require("path");
const express = require("express");
// import morgan
const morgan = require("morgan");
// import Handlebars
const handlebars = require("express-handlebars");
const hbs = require("hbs");

const app = express();
const port = 8080;
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

// use morgan
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    // rút ngắn tên đuôi file handlebars thành hbs
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "resources/views/layouts"), // Đường dẫn đến layouts
    partialsDir: path.join(__dirname, "resources/views/partials"),
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
