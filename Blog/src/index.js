const path = require("path");
const moment = require("moment"); // Thư viện để xử lý ngày tháng
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const db = require("./config/db/index");
const routes = require("./routes");

const app = express();
const port = 8001;

// Middleware
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to Database
db.connect();

// Template Engine
app.engine(
  "hbs",
  require("express-handlebars").engine({
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "resources/views/layouts"),
    partialsDir: path.join(__dirname, "resources/views/partials"),
    helpers: {
      sum: (a, b) => a + b,
      formatDate: (date, format = "DD/MM/YYYY") => {
        if (!date || (typeof date !== "string" && !(date instanceof Date))) {
          return "Invalid date"; // Báo lỗi rõ ràng hơn
        }
        if (typeof format !== "string") {
          format = "DD/MM/YYYY"; // Ensure format is a string
        }
        return moment(date).format(format);
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes
routes(app);

// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
