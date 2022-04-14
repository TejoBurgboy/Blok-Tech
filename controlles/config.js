require('dotenv').config();
const User = require('../models/user');
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const mailuser = process.env.usermail;
const mailpass = process.env.passmail;


//registeer code
const register = (req, res, next) => {
    bcrypt.hash(req.body.wachtwoord, 10, function (err, hashedPassword) {
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
                async function main() {

                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: mailuser,
                            pass: mailpass,
                        },
                        tls: {
                            rejectUnautorized: false
                        },

                    });


                    let mailoptions = {
                        from: 'Gamebuddy,s',
                        to: req.body.mail,
                        subject: 'Registratie Gamebuddy,s',
                        text: 'Regegisteert',
                        html: '<b> Uw registratie bij Gamebuddy,s gelukt <b>',

                    };

                    transporter.sendMail(mailoptions, (error, info) => {
                        if (error) {
                            return console.log(error),
                                res.json({
                                    error: error,
                                    message: 'er gaat hier iets fout',
                                });
                        }

                    });
                }
                main().catch(console.error);
                res.redirect('/login');
                return;

            })
            .catch(error => {
                errors.push({ msg: 'er gaat hier iets fout probeer het opnieuw' });
                res.redirect('/register');
                return;
            });
    });

};


//login code
const login = (req, res, next) => {
    const naam = req.body.name;
    const wachtwoord = req.body.wachtwoord;

    User.findOne({ $or: [{ mail: naam }, { name: naam }] })
        .then(user => {
            if (user) {
                bcrypt.compare(wachtwoord, user.password, function (err, result) {
                    console.log(wachtwoord);
                    console.log(user.wachtwoord);
                    console.log(naam);
                    if (err) {
                        res.json({
                            error: err,
                            message: 'er gaat hier iets fout'
                        });
                        return;
                    }
                    if (result) {
                        res.redirect('/logged');
                        return;
                    } else {
                        res.json({
                            message: 'Wachtwoord word niet herkent',
                        });
                        return;
                    }
                }
                );

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