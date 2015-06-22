var bookApp = bookApp || {};

bookApp.Library = Backbone.Collection.extend({

    model: bookApp.book,

    localStorage: new Backbone.LocalStorage('books-backbone')

});