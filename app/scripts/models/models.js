
var Backbone = require('backbone');

var Like = Backbone.Model.extend({
  defaults: {
    'like': 0,
    // 'like': 'like'
  },
  addLike: function(){
    this.set('like', this.get('like')+1)
    // return this.get('like');
  },

  // changeLike: function(){
  //   number.toJSON('like', this.get()));
  // }

});

var likeCollection = Backbone.Collection.extend({
  model: Like
});

module.exports = {
  'Like': Like,
  // 'PersonCollection': PersonCollection
};
