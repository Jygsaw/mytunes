describe('SongQueueEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new SongQueueEntryView({model: model});
    view.render();
  });

  describe('when a song is clicked', function() {
    it('dequeues the song', function() {
      sinon.spy(SongModel.prototype, 'dequeue');

      view.$el.children('.songtitle').first().click();
      expect(model.dequeue).to.have.been.called;

      SongModel.prototype.dequeue.restore();
    });
  });

});
