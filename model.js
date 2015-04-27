var Todo = Backbone.Model.extend({
  initialize: function() {
    console.log("This model Todo has been initialized.");
    this.on('change:title', function() {
      console.log(' - The Title for this module has changed');
    });
    this.on('change:completed', function() {
      console.log(' - The completed status of this todo model has changed');
    });
    this.on('invalid', function(model, error) {
      console.log(error);
    })
  },
  defaults: {
    title: '',
    completed: false
  },
  setTitle: function(newTitle){ this.set({ title: newTitle });
  },
  validate: function(attribs){ 
    if (attribs.title === undefined) {
      return "Error: Remember to set a title for your todo.";
    }
  }
});

// create our own instance of the Todo Model
var toodles = new Todo({
  title: 'Test title toodles'
});

var toodles2 = new Todo({
  title: 'Create a todo model',
  completed: true
});

var toodles3 = new Todo({
  completed: true
});

var toodlesProperties = toodles.toJSON();

toodles3.set('completed', true, {validate: true});

console.log(toodlesProperties);

console.log('JSON.stringify: ' + JSON.stringify(toodles));
// console.log(JSON.stringify(toodles2));

// console.log(toodles.get('title'));


// Set stuff

toodles2.set("title", "A new title using Model.set()");

toodles.set({
  title: "a new title set with multiple attributes using set()",
  completed: true
});

console.log(JSON.stringify(toodles))
