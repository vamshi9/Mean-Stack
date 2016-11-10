var express = require('express');
var router = express.Router();
var ctrlLocation = require('../controllers/location');
var ctrlAbout = require('../controllers/about');
/* GET home page. */
router.get('/', ctrlLocation.homePage);
router.get('/location-info',ctrlLocation.locationDetails);
router.get('/location-info/review',ctrlLocation.addReview);
router.get('/about',ctrlAbout.about);

module.exports = router;
