// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  model: SongModel,

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    // event handler for song ended event
    this.on('ended', function(song) {
      this.at(0).dequeue();
      if (this.length >= 1) {
        this.playFirst();
      }
    }, this);

    // event handler for dequeue event
    this.on('dequeue', function(song){
      this.remove(song);
    }, this);
  },

  // function to play first song in queue if available
  playFirst: function() {
    this.at(0).play();
  }
});
