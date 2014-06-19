// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),
  initialize: function(){
    this.model.on('change:playCount', function(model){
      this.render();
    }, this);

    this.model.on('change:rating', function(model){
      this.render();
    }, this);
  },
  events: {
    'click .songtitle': function() {
      // queue songs instead of immediate play
      this.model.enqueue();
      // this.model.play();
    },

    'click .voteup': function() {
      // invokes voteup to increase song rating
      this.model.voteup();
    },

    'click .votedown': function() {
      // invokes votedown to decrease song rating
      this.model.votedown();
    },
  },

  render: function(){
    var html = '';
    html += '<td>(' + this.model.get('artist') + ')</td>';
    html += '<td class="songtitle">' + this.model.get('title') + '</td>';
    html += '<td>Play Count: ' + this.model.get('playCount') + '</td>';
    html += '<td class="voteup"><img src="./art/Arrows-Up-circular-icon.png"></td>';
    html += '<td class="votedown"><img src="./art/Arrows-Down-circular-icon.png"></td>';
    html += '<td class="rating">' + this.model.get('rating') + '</td>';
    return this.$el.html(html);
  }

});
