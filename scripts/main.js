'use strict';
var $red = $('#red');
var $redLink = $('#red-link');

function red() {
  $('section').hide();	
  $red.css('display', 'block');
}

$redLink.on('click', red);



var $green = $('#green');
var $greenLink = $('#green-link');

function green() {
  $('section').hide();
  $green.css('display', 'block');
}

$greenLink.on('click', green);



var $blue = $('#blue');
var $blueLink = $('#blue-link');

function blue() {
  $('section').hide();
  $blue.css('display', 'block');
}

$blueLink.on('click', blue);


