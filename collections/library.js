var bookApp = bookApp || {};

bookApp.Library = Backbone.Collection.extend({

    model: bookApp.Book,
	url: '/api/books'
    // localStorage: new Backbone.LocalStorage('books-backbone')

});

/* 

url             HTTP Method  Operation
/api/books      GET          Get an array of all books
/api/books/:id  GET          Get the book with id of :id
/api/books      POST         Add a new book and return the book with an id attribute added
/api/books/:id  PUT          Update the book with id of :id
/api/books/:id  DELETE       Delete the book with id of :id

*/