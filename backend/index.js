const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);
const Course = require("./models/Course");
const fileupload = require("express-fileupload");
const router = express.Router();
const path = require('path');


// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));
  

app.use(passport.initialize());
app.use(passport.session());

app.use(fileupload());

//Routes
app.use("/", require("./routes/login"));
app.use("/", require("./routes/course"));

app.use(express.static('views'));

app.get('/', function(req, res) {
  res.redirect('index.html');
});

app.get("/cursos", function (req, res) {
  var cursor = Course.find();

  for (let step = 0; step < Course.count(); step++) {  
    console.log(Course.name);
  }

});


app.get('/upload', function(req, res) {
  res.render('upload.ejs');
});

app.post('/upload',(req,res) => {
  let EDFile = req.files.file
  EDFile.mv(`./files/${EDFile.name}`,err => {
      if(err) return res.status(500).send({ message : err })

      return res.status(200).send({ message : 'File upload' })
  })
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Servidor iniciado en el puerto " + PORT));
