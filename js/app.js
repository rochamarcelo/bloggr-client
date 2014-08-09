App = Ember.Application.create({});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
    serializer: DS.JSONSerializer.create({container: App.__container__})
});

App.Author = DS.Model.extend({
  name: DS.attr('string'),
  posts: DS.hasMany('post', {async: true})
});

App.Post = DS.Model.extend({
  author: DS.belongsTo('author'),
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  body: DS.attr('string'),
  date: DS.attr('date'),
  typeOf: function () {
      return typeof this.get("date");
  }.property("date")
});

App.Post.FIXTURES = [
 {
  id: '1',
  title: "Rails is Omakase",
  author: 1,
  date: new Date('12-27-2012'),
  excerpt: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want.",
  body: "I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software.\n\nRails is not that. Rails is omakase."
},
{
  id: '2',
  title: "The Parley Letter",
  author: 2,
  date: new Date('12-24-2012'),
  excerpt: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
  body: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."
},
{
  id: '3',
  title: "New he Parley Letter",
  author: 1,
  date: new Date('12-24-2012'),
  excerpt: "Ember has a steep learning curve because a) it isn't stable yet, b) there’re so many outdated examples on the web that can lead you astray. Ember-Data, a twin-brother is a trickier beast to boot. Being under heavy development, things have been changing so fast that today’s snippet is not longer relevant. On the one hand it’s pretty tricky to learn Ember, on the other, yup, it’s all about cutting-edge – you know the drill!",
  body: "Ember has a steep learning curve because a) it isn't stable yet, b) there’re so many outdated examples on the web that can lead you astray. Ember-Data, a twin-brother is a trickier beast to boot. Being under heavy development, things have been changing so fast that today’s snippet is not longer relevant. On the one hand it’s pretty tricky to learn Ember, on the other, yup, it’s all about cutting-edge – you know the drill!"
}
];

App.Author.FIXTURES = [
{
  id: 1,
  name: "Rose Tyler"
},
{
  id: 2,
  name: "Doctor Who"
},
];


var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});