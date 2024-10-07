const express = require("express");
// import morgan
const morgan = require("morgan");
// import Handlebars
const { engine } = require("express-handlebars");

const app = express();
const port = 8080;

// use morgan
app.use(morgan("combined"));

// Template engine 
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/home", (req, res) => {
  res.send(
    // render HTML
    `
    <p>Return</p>
    <h1>Hello world!</h1>
    `
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
