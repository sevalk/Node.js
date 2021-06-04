const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
//const { response } = require('express');
const Photo = require('./models/Photo');
const methodOverride = require('method-override');
const postController = require('./controllers/postControllers')
const pageController = require('./controllers/pageControllers');

const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');



//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET']
  })
);


//ROUTES
app.get('/', postController.getAllPhotos);

app.get('/photos/:id',postController.getPhoto);

app.put('/photos/:id',postController.updatePhoto );

app.delete('/photos/:id', postController.deletePost);

app.post('/photos', postController.createPost);


app.get('/photos/edit/:id', pageController.getEditPage);

app.get('/about', pageController.getAboutPage); 

app.get('/addpost', pageController.getAddPage);

app.get('/post', pageController.getPostPage);




const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı`);
});
