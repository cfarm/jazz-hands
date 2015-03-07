var Todo = Backbone.Model.extend({
  initialize: function() {
    console.log("This model Todo has been initialized.")
  },
  defaults: {
    title: '',
    completed: false
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

console.log(JSON.stringify(toodles));
console.log(JSON.stringify(toodles2));

console.log(toodles.get('title'));