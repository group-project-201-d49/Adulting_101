'use strict';

//Global variables

var flipContainer = document.getElementsByClassName('flip-container');

flipContainer.onclick = function () {
  this.classList.toggle('flipped');
  console.log('i was clicked.');
};
