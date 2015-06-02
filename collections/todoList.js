
var app = app || {}; // Todo Collection

var TodoList = Backbone.Collection.extend({

    model: app.Todo,

    localStorage: new Backbone.LocalStorage('todos-backbone'),

    completed: function() {
        return this.filter(function (todo) {
            return todo.get('completed');
        });
    },

    remaining: function() {
        return this.without.apply( this, this.completed() );
    },

    // We keep the Todos in sequential order, despite being saved by unordered // GUID in the database. This generates the next order number for new items. 
    nextOrder: function() {
        if ( !this.length ) { 
            return 1;
        }
        return this.last().get('order') + 1; 
    },

    comparator: function( todo ) {
        return todo.get('order'); 
    }

});

// Create our global collection of **Todos**.
app.Todos = new TodoList();