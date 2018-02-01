const express = require('express');
const hbs = require('hbs');

//a variable to hold which port it should be. process.env.PORT is the port that
//heroku uses, of thats not available then use the local port 3000
const port = process.env.PORT || 3000;

//Initialize express
var app = express();

//handlebar setup
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerPartials(__dirname + '/views/partials');
//Tell express to use handlebars
app.set('view engine', 'hbs');

//Set up a helper, this one adds the current date. This is used in the footer partials
hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs',{
    pageTitle:'Home Page'
  });
});

app.get('/help', (req, res) => {
  res.render('help.hbs',{
    pageTitle: 'Help Page'
  });
});

app.listen(port, ()=>{
  console.log('server is up on port');
});
