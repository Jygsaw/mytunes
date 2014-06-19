// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function(){
    // Trigger the queue event
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    // Trigger the dequeue event
    this.trigger('dequeue', this);
  }

});
