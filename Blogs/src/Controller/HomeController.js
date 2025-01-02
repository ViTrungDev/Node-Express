class HomeController {
  // Xử lý render trang chủ
  index(req, res) {
    res.render("home.hbs", {
      title: "Trang chủ",
      message: "Chào mừng đến với ứng dụng của chúng tôi!",
    });
  }

  // Xử lý render trang chi tiết
  show(req, res) {
    const slug = req.params.slug;
    res.render("details", {
      title: "Chi tiết",
      slug,
    });
  }
}

module.exports = new HomeController();
