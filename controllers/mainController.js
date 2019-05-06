const Posts = require("../models/Posts.js");

exports.index = function (request, response) {

    Posts.find({}).then(posts => {
        response.render('index', {
            posts: posts
        });
    });
};