var bookApp = bookApp || {};

bookApp.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function( initialBooks ) {
        this.collection = new bookApp.Library( initialBooks );
        this.render();
    },

    events: {
        'click #add': 'addBook',
    },

    addBook: function(e) {
        e.preventDefault();

        var $form = $('#addBook');
        var newBook = {};

        // get values from form 
        $form.find('input').each(function(index, element) {
            var $this = $(element),
                $id = $this.attr('id');
            if ($this.val() !== '') {
                console.log($this.val());
                console.log($id);
                newBook[$id] = $this.val();
                console.log(newBook);
            }
        });

        // save to library
        this.collection.add(new bookApp.Book(newBook));
        console.log(this.collection);
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new bookApp.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    }
});