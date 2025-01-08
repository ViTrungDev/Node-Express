const newRouter = require("./new");
const siteRouter = require("./site");
const meRouter = require("./me");
const courseRouter = require("./course");

function routes(app) {
  // Sử dụng app.use để gắn các router
  app.use("/new", newRouter); // Router cho /new
  app.use("/course", courseRouter); // Router cho /course
  app.use("/me", meRouter); // Router cho /me
  app.use("/", siteRouter); // Router cho trang chủ
  app.use((req, res) => {
    // tất cả cấu hình ko đúng sẽ chuyển về trang chủ
    res.redirect("/");
  });
}

module.exports = routes;
