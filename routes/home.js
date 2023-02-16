var express = require('express');
var router = express.Router();

// Get Page model
var Page = require('../models/page');

/*
 * GET /
 */
router.get('/', function (req, res) {
    res.render('home', {
        title: 'home'
    });});

// Exports
module.exports = router;


