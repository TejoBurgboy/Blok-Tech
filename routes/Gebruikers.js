const express = require('express');
const router = express.Router();
//const usergebruiker = require('../models/user')

const config = require('../controlles/config');

router.get('/login', (req, res) => res.render('login'))
router.get('/register', (req, res) => res.render('register'))

router.post('/register', config.register);

module.exports = router;