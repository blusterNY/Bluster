$(document).ready(function(){
var images=['data/1.jpg',
            'data/2.jpg',
            'data/3.jpg',
            'data/4.jpg',
            'data/5.jpg',
            'data/6.jpg',
            'data/7.jpg',
            'data/8.jpg',
            'data/9.jpg',
            'data/10.jpg',
            'data/11.jpg',
            'data/12.jpg',
            'data/13.jpg',
            'data/14.jpg',
            'data/15.jpg',
            'data/16.jpg',
            'data/17.jpg',
            'data/18.jpg',
            'data/19.jpg',
            'data/20.jpg',
            'data/21.jpg',];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('body').css({'background':bgImg, 'background-size':'cover', });

});