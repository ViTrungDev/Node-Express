const express = require('express');
const router = express.Router();
const newController = require('../App/Controllers/NewsController');

router.use('/:slug', newController.show);
router.use('/', newController.index);

module.exports = router;
