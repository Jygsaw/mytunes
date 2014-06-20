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
      if (this.length >= 1) {
        this.playFirst();
      }
    }, this);

    // event handler for songup event
    this.on('songup', function(song){
      this.moveUp(song);
    }, this);

    // event handler for songdown event
    this.on('songdown', function(song){
      this.moveDown(song);
    }, this);
  },

  // function to play first song in queue if available
  playFirst: function() {
    this.at(0).play();
  },

  moveUp: function(model) { // I see move up as the -1
    var index = this.indexOf(model);
    if (index > 0) {
      this.remove(model, {silent: true}); // silence this to stop excess event triggers
      this.add(model, {at: index-1});
      this.playFirst();
    }
  },

  moveDown: function(model) { // I see move up as the -1
    var index = this.indexOf(model);
    if (index < this.length - 1) {
      this.remove(model, {silent: true}); // silence this to stop excess event triggers
      this.add(model, {at: index+1});
      this.playFirst();
    }
  }
});
