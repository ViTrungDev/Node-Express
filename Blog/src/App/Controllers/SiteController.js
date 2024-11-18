class SiteController {
    // [Get] / home
    index(req, res) {
        res.render("home");
    }

    // [Get] form
    form(rep, res) {
        res.render("form");
    }
}

module.exports = new SiteController();
