
var Backbone = require('backbone');

var Like = Backbone.Model.extend({
  defaults: {
    'like': 0,
    // 'amount': 0
  },

  addLike: function(){
    alert('working');
  },
});

var likeCollection = Backbone.Collection.extend({
  model: Like
});

module.exports = {
  'Like': Like,
  // 'PersonCollection': PersonCollection
};
