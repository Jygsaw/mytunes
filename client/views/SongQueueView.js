// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    console.log("trying to render SongQueueView");
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
       return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});
