const express = require("express"),
  app = express();
  app.use(express.static('public'))

// Middlewares

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//setting view engine to ejs

app.set("view engine", "ejs");

// app.get('/', (req, res) => res.send('Hello World'));

app.get('/', function (req, res) {
  res.render('login');
});


//  login system
app.post('/api/signIn', urlencodedParser, function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  if (email == "vipin@1.com" && password == "1234") {
    res.redirect('/home');
  } else {
    res.send("invalidcred")
  }
});

//  End of login system//

// logout Api
app.get('/logout', function (req, res) {
  res.render('Login');
});

// end of logout api
app.get('/home', function (req, res) {
  res.render('index');
});

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});