// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  events: {
    'click .songtitle': function() {
      this.model.dequeue();
    },

    'click .songup': function() {
      // invokes voteup to increase song rating
      this.model.songup();
    },

    'click .songdown': function() {
      // invokes votedown to decrease song rating
      this.model.songdown();
    },

  },

  render: function(){
    var html = '';
    html += '<td>(' + this.model.get('artist') + ')</td>';
    html += '<td class="songtitle">' + this.model.get('title') + '</td>';
    html += '<td class="songup"><img src="./art/Arrows-Up-circular-icon.png"></td>';
    html += '<td class="songdown"><img src="./art/Arrows-Down-circular-icon.png"></td>';
    return this.$el.html(html);
  }
});
