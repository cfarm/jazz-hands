ItemView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        // Compile the template using underscore
        var template = _.template( $("#itemTemplate").html(), {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );
    },
    events: {
        'click .toggle': 'toggleCompleted',
        'dblclick label': 'edit',
        'click .destroy': 'clear',
        'blur .edit': 'close'
    },
    toggleCompleted: function() {
        console.log('toggle completed');
        //
        // this.set('completed', true, {validate: true});
    }
});

var itemView = new ItemView({ el: $(".todo-item") });