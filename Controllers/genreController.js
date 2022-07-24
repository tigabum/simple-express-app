var Genre = require("../models/genre");
var Book = require("../models/book");
var async = require("async");
var mongoose = require("mongoose");

// exports.index = (req, res) => {
//     res.send("index page not implemented")
// }

exports.genre_list = (req, res, next) => {
  Genre.find({})
    .sort({ name: "ascending" })
    .exec(function (err, list_genres) {
      if (err) {
        return next(err);
      }
      res.render("genre_list", {
        title: "Genre List",
        genre_list: list_genres,
      });
    });
  // res.send("Not implemented genre list");
};

// specific book detail
exports.genre_detail = function (req, res, next) {
  async.parallel({
    genre(callback) {
        Genre.findById(req.params.id)
          .exec(callback);
    },

    genre_books(callback) {
        Book.find({ 'genre': req.params.id })
          .exec(callback);
    },

}, function(err, results) {
    if (err) { return next(err); }
    if (results.genre==null) { // No results.
        var err = new Error('Genre not found');
        err.status = 404;
        return next(err);
    }
    // Successful, so render
    res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
});
  // res.send("Not implemented genre");
};

// book create form get
exports.genre_create_get = (req, res) => {
  res.send("genre get create form not implemented");
};

//book create post
exports.genre_create_post = (req, res) => {
  res.send("genre post create not implemented");
};

//book update form get
exports.genre_update_get = (req, res) => {
  res.send("genre get update form is not implemented");
};

//book update post
exports.genre_update_post = (req, res) => {
  res.send("genre post update is not implemented");
};

//book delete get
exports.genre_delete_get = (req, res) => {
  res.send("genre update get is not implemented");
};

//book delete post
exports.genre_delete_post = (req, res) => {
  res.send("genre update post is not implemented");
};
