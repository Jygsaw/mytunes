// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();

    // update view when song added to songQueue
    this.collection.on('add', function(){
      this.render();
    }, this);
  },

  render: function() {
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
       return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});
