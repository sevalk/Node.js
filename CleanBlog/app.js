const express = require('express');
const ejs = require('ejs');
const path = require('path');
const { response } = require('express');

const app = express();


//TEMPLATE ENGINE
app.set("view engine", "ejs");


// const myLogger = (req, res, next) => {
//     console.log("Middleware log 1");
//     next();
// }

// const myLogger2 = (req, res, next) => {
//     console.log("Middleware log 2");
//     next()
// }

//MIDDLEWARES
app.use(express.static('public'))
// app.use(myLogger);
// app.use(myLogger2);

//ROUTES
app.get('/', (req, res) => {
   // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
   res.render('index');

})
app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('about');
 
 })
 app.get('/addpost', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('add_post');
 
 })
 app.get('/post', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('post');
 
 })

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı`);
})