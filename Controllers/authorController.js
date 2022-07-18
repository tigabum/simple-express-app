var Author = require("../models/author");

exports.author_list = (req, res) => {
  res.send("Not implemented author list");
};

// specific author
exports.author_detail = (req, res) => {
  res.send("Not implemented author", req.params.id);
};

// aurhor create form get
exports.author_create_get = (req, res) => {
  res.send("Author get create form not implemented");
};

//author create post
exports.author_create_post = (req, res) => {
  res.send("Author post create not implemented");
};

//author update form get
exports.author_update_get = (req, res) => {
  res.send("Author get update form is not implemented");
};

//author update post
exports.author_update_post = (req, res) => {
  res.send("Author post update is not implemented");
};

//author delete get
exports.author_delete_get = (req, res) => {
  res.send("Author update get is not implemented");
};

//author delete post
exports.author_delete_post = (req, res) => {
  res.send("Author update post is not implemented");
};
