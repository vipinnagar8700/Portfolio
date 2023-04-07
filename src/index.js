const express = require("express"),
  app = express();
//setting view engine to ejs
app.set("view engine", "ejs");
app.use(express.static('public'))

// app.get('/', (req, res) => res.send('Hello World'));



app.get('/home', function (req, res) {
  res.render('index');
});

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});