const Course = require('../Models/Course');

class SiteController {
    // [GET] /home
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'Message!!!' });
        }
    }

    // [GET] /form
    form(req, res) {
        res.render('form');
    }
}

module.exports = new SiteController();
