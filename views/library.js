var bookApp = bookApp || {};

bookApp.LibraryView = Backbone.View.extend({
    el: '#books',

    // front end app
    // initialize: function( initialBooks ) {
    //     this.collection = new bookApp.Library( initialBooks );
    //     this.listenTo( this.collection, 'add', this.renderBook );
    //     this.render();
    // },

    // server side app
    initialize: function(initialBooks) {                    // UPDATED
        this.collection = new bookApp.Library(initialBooks);    // UPDATED
        this.collection.fetch({reset: true});   // NEW
        this.render();

        this.listenTo( this.collection, 'add', this.renderBook );
        this.listenTo( this.collection, 'reset', this.render ); // NEW
    },


    events: {
        'click #add': 'addBook'
    },

    addBook: function(e) {
        e.preventDefault();

        var $form = $('#addBook');
        var formValues = {};

        // get values from form 
        $form.find('input').each(function(index, element) {
            var $this = $(element),
                $id = $this.attr('id');
            if ($this.val() !== '') {
                console.log($this.val());
                console.log($id);
                formValues[$id] = $this.val();
                console.log(formValues);
            }
        });

        // save to library
        if (!jQuery.isEmptyObject(formValues)) {
            newBook = new bookApp.Book(formValues);
            this.collection.add(newBook);
            newBook.save();
        }
        
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