// bookApp = library of books

var bookApp = bookApp || {};

// Our overall **bookAppView** is the top-level piece of UI.
bookApp.AppView = Backbone.View.extend({
  el: "#bookapp",

  statsTemplate: _.template( 
    $('#stats-template').html() 
  ),

  // At initialization we bind to the relevant events on the `Todos` // collection, when items are added or changed.
  // this.$() finds elements relative to this.$el
  initialize: function() {
    this.allCheckbox = this.$('#toggle-all')[0];
    this.$input = this.$('#new-todo'); 
    this.$footer = this.$('#footer');
    this.$main = this.$('#main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);
    this.listenTo(app.Todos, 'change:completed', this.filterOne); 
    this.listenTo(app.Todos,'filter', this.filterAll); 
    this.listenTo(app.Todos, 'all', this.render);
  
    app.Todos.fetch(); 
  },

  // Add a single todo item to the list by creating a view for it, and // appending its element to the `<ul>`.
  addOne: function( todo ) {
    var view = new app.TodoView({ model: todo });
    console.log(view);
    $('#todo-list').append( view.render().el );
  },

  // Add all items in the **Todos** collection at once.
  addAll: function() { 
    this.$('#todo-list').html(''); 
    app.Todos.each(this.addOne, this);
  },

  // New
  // Delegated events for creating new items, and clearing completed ones. 
  events: {
    'keypress #new-todo': 'createOnEnter',
    'click #clear-completed': 'clearCompleted',
    'click #toggle-all': 'toggleAllComplete'
  },

  // Rerendering the app just means refreshing the statistics -- the rest // of the app doesn't change.
  render: function() {
    var completed = app.Todos.completed().length;
    var remaining = app.Todos.remaining().length;


    // do we got some todos?
    if ( app.Todos.length ) {
      // let's show em
      this.$main.show(); 
      this.$footer.show();

      // update stats 
      this.$footer.html(this.statsTemplate({ completed: completed,
        remaining: remaining
      }));

      // some kinda filter crap
      this.$('#filters li a')
        .removeClass('selected')
        .filter('[href="#/' + ( app.TodoFilter || '' ) + '"]') .addClass('selected');
    } else { 
      this.$main.hide(); 
      this.$footer.hide();
    }

    this.allCheckbox.checked = !remaining; 
  },

  // New
  filterOne : function (todo) { 
    todo.trigger('visible');
  },

  // New
  filterAll : function () { 
    app.Todos.each(this.filterOne, this);
  },

  // New
  // Generate the attributes for a new todo item.
  newAttributes: function() {
    return {
      title: this.$input.val().trim(), 
      order: app.Todos.nextOrder(), 
      completed: false
    }; 
  },

  // New
  // If you hit return in the main input field, create new Todo model, // persisting it to localStorage.
  createOnEnter: function( event ) {
    if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) { 
      return;
    }
    app.Todos.create( this.newAttributes() );
    this.$input.val(''); 
    // Note that this is referring to the view and not the DOM element since the callback was bound using the events hash.
  },

  // New
  // Clear all completed todo items, destroying their models. 
  clearCompleted: function() {
    _.invoke(app.Todos.completed(), 'destroy');
    return false; 
  },

  // New
  toggleAllComplete: function() {
    var completed = this.allCheckbox.checked;
    app.Todos.each(function( todo ) { 
      todo.save({
        'completed': completed
      });
    }); 
  }

});