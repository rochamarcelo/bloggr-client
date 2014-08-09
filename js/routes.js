App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: '/view/:post_id' });
    this.resource('new_post', { path: '/new' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  }
});

App.NewPostRoute = Ember.Route.extend({
  model: function(params) {
     var post = this.store.createRecord(
        'post',
        {
            title: 'New post',
            date: new Date(),
            excerpt: '',
            body: ''
        }
    );
    this.store.find('author', 2).then(function(author){
        post.set('author', author);
    });
    return post;
  }
});