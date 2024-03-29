// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    // TODO verify param initialization convention
    params.songqueue = this.get('songQueue');

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    // event handler for the queue event
    params.library.on('enqueue', function(song){
      // get the songQueue array
      // add the song to our songQueue array
      params.songqueue.add(song);
    }, this);

    // event handler for dequeue event to stop player
    params.songqueue.on('dequeue', function(song) {
      if (params.songqueue.length === 0) {
        this.set('currentSong', undefined);
      }
    }, this);
  },
});
