var TodoView = Backbone.View.extend({

  // tagName: 'li',
  // className: 'todo-item',
  el: '#todo',
  template: _.template('#todo-template'),
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },
  render: function() {
    //model needs to expose items for this to work
    var items = this.model.get('items');

    _.each(items, function(item){
        var itemView = new TodoView({model: item});
        this.$el.append(todoView.render().el);
    }, this);


    // this.$el.html( this.template(this.model.toJSON()));
    // return this;
  },
  edit: function() {
    // when dblclick label
  },
  close: function() {
    // when todo blurs/loses focus
  },
  updateOnEnter: function() {
    // when edit is entered
  }
});

var todoView = new TodoView();

console.log(todoView.el); //logs li.todo-item
console.log(todoView.todoTemplate); //logs li.todo-item

todoView.setElement('<p><a><b>test</b></a></p>');
todoView.$('a b').html();

var view = new Backbone.View; view.setElement('<p><a><b>test</b></a></p>'); view.$('a b').html(); // outputs "test"

// var ItemView = Backbone.View.extend({
//   events: {},
//   render: function() {
//     this.$el.html(this.model.toJSON());
//     return this;
//   }
// });

// var ListView = Backbone.View.extend({
//   render: function () {
//     var itms = this.model.get('items');

//     _.each(items, function(item){
//         var itemView = new ItemView({model: item});
//         this.$el.append(itemView.render().el);
//     }, this);
//   }
// });


// var listView = new ListView();

// console.log(listView);