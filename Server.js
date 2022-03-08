const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const Port = process.env.Port || 1234;
const bcrypt = require('bcrypt');
const { response } = require('express');

const app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended:false}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const user = {
  name: 'Tejo',
  leeftijd: '20',
  woont: 'ouderkerk'
};

app.get('/', (req, res) => {
  res.render('index', { user: user });
});

app.get('/register', (req, res) => {
  res.render('register');
})

app.post('/register', async (req, res) => {
try{
const hashedPassword = await bcrypt.hash(req.body.wachtwoord, 10);
users.push({
  id: Date.now().toString(),
  name: req.body.name,
  mail: req.body.mail,
  password: hashedPassword;
})
res.redirect('/login');
} catch{
res.redirect('/register');
}
console.log(users);
});

app.get('/about', (req, res) => {
  res.render('about', { user: user });
});

app.get('/login', (req, res) => {
  res.render('login', { user: user });
});

app.post('/login', (req, res) => {

});



app.listen(Port, () => {
  console.log(`server running on port: ${Port}`)
});

