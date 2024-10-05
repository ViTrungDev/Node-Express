const express = require("express");
// import morgan
const morgan = require("morgan");
const app = express();
const port = 3000;

// user morgan
app.use(morgan("combined"));
app.get("/home", (req, res) => {
  res.send("Hello World with node express!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
