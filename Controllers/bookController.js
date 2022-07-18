var Book = require("../models/book");


exports.index = (req, res) => {
    res.send("index page not implemented")
}

exports.book_list = (req, res) => {
  res.send("Not implemented author list");
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
