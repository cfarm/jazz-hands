SearchView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        // Compile the template using underscore
        var template = _.template( $("#search_template").html(), {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );
    }
});

var searchView = new SearchView({ el: $("#search_container") });