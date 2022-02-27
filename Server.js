const express = require('express');
const app = express();
const Port = process.env.Port || 3000;

//const Handlebars = require("handlebars");
//const template = Handlebars.compile("Name: {{name}}");
//console.log(template({ name: "Tejo" }));
//const compiledTemplate = require("example.handlebars");

let person = {
    firstname: "Yehuda",
    lastname: "Katz",
  };
Handlebars.registerHelper('loud', function(string) {
    return string.toUpperCase()});


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

