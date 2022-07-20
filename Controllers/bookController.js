var Book = require("../models/book");
var Author = require('../models/author');
var BookInstance = require('../models/bookinstance');
var Genre = require('../models/genre')
var async = require('async')

exports.index = (req, res) => {
  async.parallel({
    book_count(callback) {
        Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
    },
    book_instance_count(callback) {
        BookInstance.countDocuments({}, callback);
    },
    book_instance_available_count(callback) {
        BookInstance.countDocuments({status:'Available'}, callback);
    },
    author_count(callback) {
        Author.countDocuments({}, callback);
    },
    genre_count(callback) {
        Genre.countDocuments({}, callback);
    }
}, function(err, results) {
    res.render('index', { title: 'Local Library Home', error: err, data: results });
});

}

exports.book_list = (req, res, next) => {
  // res.send("Not implemented author list");

  Book.find({}, 'title author')
  .sort({title: 1})
  .populate('author')
  .exec(function(err, list_books){
    if(err) {return next(err)}
    res.render('book_list', { title: 'Book List', book_list: list_books });

  })

};

// specific book
exports.book_detail = (req, res) => {
  res.send("Not implemented book", req.params.id);
};

// book create form get
exports.book_create_get = (req, res) => {
  res.send("Book get create form not implemented");
};

//book create post
exports.book_create_post = (req, res) => {
  res.send("Book post create not implemented");
};

//book update form get
exports.book_update_get = (req, res) => {
  res.send("Book get update form is not implemented");
};

//book update post
exports.book_update_post = (req, res) => {
  res.send("Book post update is not implemented");
};

//book delete get
exports.book_delete_get = (req, res) => {
  res.send("Book delete get is not implemented");
};

//book delete post
exports.book_delete_post = (req, res) => {
  res.send("Book delete post is not implemented");
};
