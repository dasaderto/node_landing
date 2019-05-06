const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const config = require('./config');
const staticAsset = require('static-asset');
const express = require("express");
const Posts = require('./models/Posts');
const mainRouter = require("./routes/mainRouter.js");

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

mongoose.connection
    .on('error', error => console.log(error))
    .on('close', () => console.log('Database connection closed.'))
    .on('open', () => console.log("Connection to DB was sucessed"));

mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true
});

const app = express();
app.set("view engine", "ejs");

app.use("/", mainRouter);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));
//app.use(staticAsset(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

app.listen(config.PORT, function () {
    console.log(`Example app listening on port ${config.PORT}!`);
});

// Posts.create({
//     img: '/images/old_school.png',
//     title: 'Sem Elit Amet Vestibulum',
//     title_desc: 'Graphic, Article | 13 Comments',
//     date_day: 21,
//     date_mon: 'FEB',
//     post_body: 'Nulla libero un pharetra augue etiam malesuada magna mollis. Nullam id dolor id nibh ultricies.'
// }).then(post => console.log(post.id));