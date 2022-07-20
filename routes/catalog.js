var express = require('express')
var router = express.Router()

// Require controller modules
var author_controller = require('../Controllers/authorController')
var book_controller = require('../Controllers/bookController')
var bookinstance_controller = require('../Controllers/bookinstanceController')
var genre_controller = require('../Controllers/genreController')

/// BOOK ROUTES ///

// Get catalog home page
router.get('/', book_controller.index)

// Get request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', book_controller.book_create_get)

// POST request for creating Book.
router.post('/book/create', book_controller.book_create_post)

//GET request to delet book.
router.get('/book/:id/delete', book_controller.book_delete_get)

//POST request to delete book.
router.post('/book/:id/delete',book_controller.book_delete_post)

//GET request to update book
router.get('/book/:id/update', book_controller.book_update_get)

//POST request to update book
router.post('/book/:id/update', book_controller.book_update_post)

//GET request for one book
router.get('/book/:id', book_controller.book_detail)

// GET request for whole list of books
router.get('/books', book_controller.book_list)

/// AUTHOR ROUTES ///

// Get request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/author/create', author_controller.author_create_get)

// POST request for creating author.
router.post('/author/create', author_controller.author_create_post)

//GET request to delet author.
router.get('/author/:id/delete', author_controller.author_delete_get)

//POST request to delete author.
router.post('/author/:id/delete',author_controller.author_delete_post)

//GET request to update author
router.get('/author/:id/update', author_controller.author_update_get)

//POST request to update author
router.post('/author/:id/update', author_controller.author_update_post)

//GET request for one author
router.get('/author/:id', author_controller.author_detail)

// GET request for whole list of authors
router.get('/authors', author_controller.author_list)

/// GENRE ROUTES ///

// Get request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/genre/create', genre_controller.genre_create_get)

// POST request for creating genre.
router.post('/genre/create', genre_controller.genre_create_post)

//GET request to delet genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get)

//POST request to delete genre.
router.post('/genre/:id/delete',genre_controller.genre_delete_post)

//GET request to update genre
router.get('/genre/:id/update', genre_controller.genre_update_get)

//POST request to update genre
router.post('/genre/:id/update', genre_controller.genre_update_post)

//GET request for one genre
router.get('/genre/:id', genre_controller.genre_detail)

// GET request for whole list of genres
router.get('/genres', genre_controller.genre_list)

/// BOOKINSTANCE ROUTES ///

// Get request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get)

// POST request for creating bookinstance.
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post)

//GET request to delet bookinstance.
router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get)

//POST request to delete bookinstance.
router.post('/bookinstance/:id/delete',bookinstance_controller.bookinstance_delete_post)

//GET request to update bookinstance
router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get)

//POST request to update bookinstance
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post)

//GET request for one bookinstance
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail)

// GET request for whole list of bookinstances
router.get('/bookinstances', bookinstance_controller.bookinstance_list)

module.exports = router