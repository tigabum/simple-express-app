var BookInstance = require("../models/bookinstance");


// exports.index = (req, res) => {
//     res.send("index page not implemented")
// }

exports.bookinstance_list = (req, res) => {
  res.send("Not implemented bookInstance list");
};

// specific book
exports.bookinstance_detail = (req, res) => {
  res.send("Not implemented bookinstance", req.params.id);
};

// book create form get
exports.bookinstance_create_get = (req, res) => {
  res.send("Bookinstance get create form not implemented");
};

//book create post
exports.bookinstance_create_post = (req, res) => {
  res.send("Bookinstance post create not implemented");
};

//book update form get
exports.bookinstance_update_get = (req, res) => {
  res.send("Bookinstance get update form is not implemented");
};

//book update post
exports.bookinstance_update_post = (req, res) => {
  res.send("Bookinstance post update is not implemented");
};

//book delete get
exports.bookinstance_delete_get = (req, res) => {
  res.send("Bookinstance update get is not implemented");
};

//book delete post
exports.bookinstance_delete_post = (req, res) => {
  res.send("Bookinstance update post is not implemented");
};
