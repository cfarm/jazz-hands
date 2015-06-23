var bookApp = bookApp || {};

bookApp.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/spiceupyourlife.jpg',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});