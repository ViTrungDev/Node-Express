const Course = require('../Models/Course');

class SiteController {
    // Cách 1
    // [GET] /home
    /*
    async index(req, res,next) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            next(err);
        }
    }
*/
    // Cách 2
    index(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    courses: courses,
                }),
            )
            .catch((error) => next(error));
    }
    // [GET] /form
    form(req, res) {
        res.render('form');
    }
}

module.exports = new SiteController();
