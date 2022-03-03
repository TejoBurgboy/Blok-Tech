const express = require('express');
const { engine } = require('express-handlebars');
const Port = process.env.Port || 1234;

const app = express();

app.use(express.static(__dirname + "/static"));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const user = {
  name: 'Tejo',
  leeftijd: '20',
  woont: 'ouderkerk'
}

app.get('/', (req, res) => {
  res.render('index', { user: user });
});

app.get('/register', (req, res) => {
  res.render('register');
})

app.get('/about', (req, res) => {
  res.render('about', { user: user });
});



app.listen(Port, () => {
  console.log(`server running on port: ${Port}`)
});

