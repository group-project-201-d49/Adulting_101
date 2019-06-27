'use strict';

//Global variables
var userName='';
var currentUser = '';
//Global functions

//User name requested with a form, use css to hide the structure after the introduction and user input is completed
//push user input to local storage

// document.getElementById('submit-button').addEventListener('click', );

var form = document.getElementById('userLogin');

var addUser = function(event) {
  event.preventDefault();
  var userEntry = event.target.userName.value;
  if (localStorage.userEntry) {
    userName = localStorage.userEntry;
    currentUser = userName;
  } else {
    userName = event.target.userName.value;
    currentUser = userName;
    localStorage.setItem('Current', currentUser);
    localStorage.setItem(`'${userName}'`, userName);
  }
  window.location.href='./index.html';
};

form.addEventListener('submit', addUser);