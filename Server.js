const express = require('express');
const { engine } = require('express-handlebars');
const Port = process.env.Port || 1234;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(Port, () => {
  console.log(`server running on port: ${Port}`)
});
