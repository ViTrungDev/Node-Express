class NewsController {
  // [Get] / new
  index(req, res) {
    res.render("new");
  };

  // [Get] /new:slug
  show(rep,res){
    res.send("New detal!!!!!!");
  }
}

module.exports = new NewsController;