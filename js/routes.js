App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    // this.transitionTo('posts');
    var models = this.store.find('post');
    console.log(models);

    models = this.store.find('author');
    console.log(models);
  }
});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    varr = this.store.find('author');
    console.log(varr);
    return this.store.find('post');
  },
  afterModel: function (posts, transition) {
    if ( posts.get('length') >= 1 ) {
      this.transitionTo('post', posts.get('firstObject'));
    }
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  }
});