const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    bcrypt.hash(req.body.wachtwoord, 10, function (err, hashedPassword) {
        if (err) {
            res.json({
                error: err
            })
        }

        });
        let user = new User({
            name: req.body.name,
            mail: req.body.mail,
            game: req.body.game,
            password: hashedPassword,


    });
    user.save
        .then(user => {
            res.json({
                message: 'Gebruiker succes vol toegevoegd'
            })
        })
        .catch(error => {
            res.json({
                message: 'Er is iets fout gegaaan'
            })
        })
};

module.exports = {
    register
}