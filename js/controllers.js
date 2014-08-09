App.PostController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    doneEditing: function() {
      var model = this.get('model');
      this.set('isEditing', false);
      model.save();
    }
  }
});

App.PostsController = Ember.ObjectController.extend({
  actions: {
    delete: function(model) {
      model.deleteRecord();
      model.save();
    }
  }
});

App.NewPostController = Ember.ObjectController.extend({
  actions: {
    done: function(router) {
        var model = this.get('model');
        model.save();
        this.transitionToRoute('/posts/view/' + model.get('id'));
    }
  }
});