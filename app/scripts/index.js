var Like = require('./models/models').Like;
var $ = require('jquery');

// var Person = require('./models/person').Person;
// var PersonCollection = require('./models/person').PersonCollection;

var number = new Like();

$('.button').on('click', function(event){
  event.preventDefault();
  number.addLike();
  $('#number').html(number.get('like'));
  // number.changeLike();
})

// if (){
//
// }

// var numb = $('.verb').html()

// console.log(numb);
