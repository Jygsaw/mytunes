// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: function(){
    return {
      playCount: 0,
      rating: 0,
    };
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
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
  },
  plusPlay: function() {
    this.set('playCount', this.get('playCount')+1);
  },
  voteup: function(){
    // Trigger the voteup event
    this.trigger('voteup', this);
    // Increment the rating of the song
    this.set('rating', this.get('rating')+1);
  },
  votedown: function(){
    // Trigger the votedown event
    this.trigger('votedown', this);
    // Decrement the rating of the song
    this.set('rating', this.get('rating')-1);
  },
  songup: function(){
    // Trigger the voteup event
    this.trigger('songup', this);
  },
  songdown: function(){
    // Trigger the votedown event
    this.trigger('songdown', this);
  }

});
