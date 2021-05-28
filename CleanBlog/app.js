const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
//const { response } = require('express');
const Photo = require('./models/Photo');

const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// const myLogger = (req, res, next) => {
//     console.log("Middleware log 1");
//     next();
// }

// const myLogger2 = (req, res, next) => {
//     console.log("Middleware log 2");
//     next()
// }

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(myLogger);
// app.use(myLogger2);

//ROUTES
app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
});

app.get('/photos/:id', async (req, res) => {
  const post = await Photo.findById(req.params.id);
  res.render('post', {
    post,
  });
});

app.get('/about', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});
app.get('/addpost', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı`);
});
