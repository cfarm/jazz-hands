var bookApp = bookApp || {};

bookApp.Library = Backbone.Collection.extend({

    model: bookApp.Book,

    localStorage: new Backbone.LocalStorage('books-backbone')

});