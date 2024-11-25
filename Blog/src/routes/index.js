const newRouter = require(`./new`);
const siteRouter = require("./site");
const courseRouter = require("./course");
function routes(app) {
  app.use("/new", newRouter);
  app.use("/course", courseRouter);

  app.use("/", siteRouter);

  // app.get("/home", (req, res) => {
  //   res.render("home");
  // });
  // app.get("/new", (req, res) => {
  //   res.render("new");
  // });

  // app.get("/form", (req, res) => {
  //   res.render("form");
  // });
}
module.exports = routes;
