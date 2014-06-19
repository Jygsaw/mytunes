// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: function(){
    return {
      playCount: 0,
    };
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount', this.get('playCount')+1);
  },
  ended: function() {
    // Trigger the ended event
    this.trigger('ended', this);
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
