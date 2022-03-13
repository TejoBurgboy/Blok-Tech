const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');


//registeer code
const register = (req, res, next) => {
    consthashedPassword = bcrypt.hash(req.body.wachtwoord, 10, function (err, hashedPassword) {
        if (err) {
            res.json({
                error: err
            });
        }

        let user = new User({
            name: req.body.name,
            mail: req.body.mail,
            game: req.body.game,
            password: hashedPassword,


        });
        user.save()
            .then(user => {
                res.json({
                    message: 'Gebruiker succes vol toegevoegd'
                });
            })
            .catch(error => {
                res.json({
                    message: 'Er is iets fout gegaaan'
                });
            });
    });

};


//login code
const login = (req, res, next) => {
    const naam = req.body.name;
    const wachtwoord = req.body.password;

    User.findOne({ $or: [{ mail: naam }, { name: naam }] })
        .then(user => {
            if (user) {
                bcrypt.compare(wachtwoord, user.wachtwoord, function (err, result) {
                    if (err) {
                        res.json({
                            message: 'er gaat hier iets fout',
                            error: err
                        });
                        return;
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'verySecretValue', { expressIn: '1h' });
                        res.json({
                            message: 'Login succesvol',
                            token: token,
                        });
                    } else {
                        res.json({
                            message: 'Wachtwoord word niet herkent',
                        });
                        return;
                    }
                });

            } else {
                res.json({
                    message: 'no user found',
                });
                return;
            }
        });
};

module.exports = {
    register, login
};