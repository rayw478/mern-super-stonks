const router = require('express').Router();
let Stock = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Stock.find()
        .then(stocks => res.json(stocks))
        .catch(err => res.status(400).json('Error: ' + err));
});

