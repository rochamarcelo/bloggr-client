App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      var model = this.get('model');
      this.set('isEditing', false);
      console.log(model.get('author'));

      model.save();
      console.log(model.get('author'));
    }
  }
});