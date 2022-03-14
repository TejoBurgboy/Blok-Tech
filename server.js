require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const Port = process.env.Port || 5000;
const bcrypt = require('bcrypt');
const { response } = require('express');
const mongoose = require('mongoose');
const dbkey = process.env.MongoURI;
const EXPsession = process.env.SecretSESSION;
const app = express();
const passport = require('passport');

//het koppelen van de database
mongoose.connect(dbkey, { useNewURLparser: true })
  .then(() => console.log('database is connected.'))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: EXPsession,
  resave: true,
  saveUninitialized: true
})
);

//static folder koppelen aan server.js
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));

//Hier word handlebars als engine neergezet
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// het maken van een index pagina
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/logged', (req, res) => {
  res.render('logged');
});

//about pagina
app.get('/about', (req, res) => {
  res.render('about');
});

//route naar de login en registeer scherm
app.use('/', require('./routes/Gebruikers'));
app.use(passport.initialize());
app.use(passport.session());

//error
app.use((req, res) => {
  res.status(404).send("Deze pagina kan je niet vinden");
});

//connecten met de local host
app.listen(Port, () => {
  console.log(`server running on port: ${Port}`);
});



// het ophalen van de info van de registeer pagina doormiddel van clinent size javasript.
// Dit is een async functie omdat er try en catch in zitten.
//app.post('/register', async (req, res) => {
//try{
//const hashedPassword = await bcrypt.hash(req.body.wachtwoord, 10);
//users.push({
  //id: Date.now().toString(),
  //name: req.body.name,
  //mail: req.body.mail,
  //game: req.body.game,
  //password: hashedPassword
//})

//res.redirect('/login');
//} catch{
//res.redirect('/about');
//}
//console.log(users);
//});