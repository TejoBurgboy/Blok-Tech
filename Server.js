const express = require('express');
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Tejo" }));
const app = express();
const Port = process.env.Port || 1337;
app.get('/', onHome);
app.get('/about',onAbout);
function onHome(req, res) {
    res.send('hello from home')
  };
function onAbout(req, res) {
  res.send('Hello from about')
};
app.listen(Port, () => {
  console.log(`server running on port: ${Port}`)
});

