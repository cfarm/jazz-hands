var bookApp = bookApp || {};

$(function() {
    var books = [
        { title: 'Slam it to your left', author: 'Baby Spice', releaseDate: '2008', keywords: 'JavaScript Programming' },
        { title: 'If you\'re having a good time', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
        { title: 'Shake it to your right', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
        { title: 'If you know that you feel fine', author: 'Sporty', releaseDate: '1991', keywords: 'Novel Splatter' },
        { title: 'Chicas to the left', author: 'Hi C YA hold tight', releaseDate: '2011', keywords: 'JavaScript Programming' }
    ];

    new bookApp.LibraryView( books );
});