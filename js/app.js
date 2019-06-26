'use strict';

/*
Alert user to submit their name. Store their name in local storage. Store in name: 'value'.

Build a contructor function that builds each topic/card and their properties and methods. There will be an array storing the content of the checklist skills. Push each checked box event to local storage.

We will need an event listener for when the user checks off a skill. This will be used in the score field at the bottom, and tallied for the trophies.

To track the topic/cards completion we will need to iterate through the objects skill array.length and when the array is complete trigger logic to complete the topic/card and award the matching trophy.

Stretch goal of a pop up window when cards are completed congratulating the user with their name and instructing them to check out their trophy on the score page.
*/

//Global variables

//Global functions

//User name requested with a form, use css to hide the structure after the introduction and user input is completed
//push user input to local storage

document.getElementById('submit-button').addEventListener('click', textEntry);

function textEntry(userName) {
  if (userName === 'string') {
    
  }
}

function test()
{
  var userInput = document.getElementById('user-entry').value;
  document.write(userInput);
  console.log(userInput);
}

test();


// var userEntry = user data entered into <input>text user entry</input>

// localStorage.setItem('textEntry', user entered input text (username) )

// localStorage.setItem('textEntry', userEntry);

// var data = localStorage.getItem('textEntry');

// var userName = [];
// getElementById('user-entry');

// var storeUserName = function(){
//   this.name = [];
// }

// storeUserName.prototype.setItem = function (userName, userTextEntry) {
//   if (typeof userTextEntry !== "string") {
//     {return;
//     this.name[username] = userTextEntry;}
// }
//   storeUserName.prototype.getItem = function(userName) {
//     return this.name[userName];
//   }
// }


/**
 * Constructor function for cards
 *
 * @param {*} aTopicName Describes the topic title for the card and its content
 */
function CardTopic (aTopicName) {
  this.topicName = aTopicName;
  this.topicSkillList = [];
  var skillComplete = 0;
  this.cardTopicIndex = CardTopic.list.push(this) - 1;
}

//Array of card topics
CardTopic.list =[];

//Prototype to add skills to each card, then storing checked information in the skill object and then getting stored checked info from LS if it exists
CardTopic.prototype.addSkill = function(aSkillName, aLink) {
  var skill = new Skill(aSkillName, aLink);
  var skillIndex = this.topicSkillList.push(skill) - 1;
  var key = `${userName}.${this.cardTopicIndex}.${skillIndex}`;
  var value = localStorage.getItem(key);
  console.log(value);

  if (value) {
    skill.completed = (value === 'completed');
  }
};

//Function to look at the card topic list and given the index will id which card interested in and will call the updated skill function for that specific card

CardTopic.updateSkill = function(aCardTopicIndex,aSkillIndex,aCompleted) {
  CardTopic.list[aCardTopicIndex].updateSkill(aSkillIndex,aCompleted);
};

CardTopic.prototype.updateSkill = function(aSkillIndex,aCompleted) {
  var skill = this.topicSkillList[aSkillIndex];
  skill.completed = aCompleted;

  var key = `${userName}.${this.cardTopicIndex}.${aSkillIndex}`;
  var value = '';

  if (aCompleted) {
    value = 'completed';
  }
  localStorage.setItem(key,value);
};

//Function to count completion of the skills across topics (total skills completed)
CardTopic.totalSkillsComplete = function() {
  var result = 0;
  for (var i = 0; i < CardTopic.list.length; i++) {
    result += CardTopic.list[i].cardSkillsComplete();
  }
  console.log('total skills complete:', result);
  return result;
};

//Prototype to count completion of the skill for each card
CardTopic.prototype.cardSkillsComplete = function() {
  var result = 0;
  for (var i = 0; i < this.topicSkillList.length; i++) {
    if (this.topicSkillList[i].completed) {
      result ++;
    }
  }
  console.log('card skills complete:', result);
  return result;
};

/**
 * Constructor to create the skill object
 * Includes name and link
 *
 * @param {*} aSkillName
 * @param {*} aLink
 */
function Skill(aSkillName, aLink) {
  this.skillName = aSkillName;
  this.link = aLink;
  this.completed = false;
}

/**
 * Function to create the card object
 *
 */
function createCards() {
  var card = new CardTopic('Finance');
  card.addSkill('How to make and follow a budget', 'https://www.youtube.com/watch?v=AezoY23Qxq0');
  card.addSkill('How to plan for retirement', 'https://www.cnbc.com/2019/05/06/to-retire-with-1-million-gen-z-and-millennials-should-do-this.html');
  card.addSkill('How to do your taxes', 'https://blog.taxact.com/tax-planning-for-working-millennials/');

  card = new CardTopic('Social');
  card.addSkill('How to be a better listener', 'https://youtu.be/GOr8xuRcd6Y');
  card.addSkill('Online etiquette', 'https://transparency.kununu.com/worklife-real-talk-millennial-guide-email-etiquette/');
  card.addSkill('Phone Calls', 'https://www.huffpost.com/entry/corporate-telephone-etiquette-a-wake-up-call-for-millennials_b_5a2febdee4b0cf10effbb086/');

  card = new CardTopic('Cooking');
  card.addSkill('How to boil water', 'https://www.youtube.com/watch?v=kieGBkOdyMU');
  card.addSkill('How to cook eggs', 'https://www.youtube.com/watch?v=qWAagS_MANg');
  card.addSkill('How to chop an onion', 'https://www.youtube.com/watch?v=0LJb66aYtG8');
}

/**
 * this renders one card and returns the index for that card
 *
 */
function renderCard(aCardTopicIndex) {
  //locate container div document.getElementById CardDeck
  //use helper funct. add element to build out HTML with

  var card = CardTopic.list[aCardTopicIndex];

  var flipContainer = addElement(undefined, 'div', undefined, 'flip-container');
  console.log(flipContainer);

  flipContainer.onclick = function() {
    console.log('I was clicked');
    this.classList.toggle('flipped');
  };

  // TODO add ontouchstart and add dynamically changing flipCard number
  var flipCard = addElement(flipContainer, 'div', undefined, 'flip-card-0');

  var front = addElement(flipCard, 'div', undefined, 'front');
  addElement(front, 'div', card.topicName);
  console.log(front);
  addElement(front, 'i', undefined, 'card-0');

  var back = addElement(flipCard, 'div', undefined, 'back');
  var taskList = addElement(back, 'ul');

  // For loop creating each of the rows on the back side of the card from the skill list (card.topicSkillList)

  for (var i = 0; i < card.topicSkillList.length; i++) {

    var skill = card.topicSkillList[i];
    var li = addElement(taskList, 'li');

    var checkBox = addElement(li, 'input');
    checkBox.type = 'checkbox';
    checkBox.id = `${card.cardTopicIndex}.${i}`;
    checkBox.checked = skill.completed;
    checkBox.addEventListener('change', handleSkillChange);

    var a = addElement(li,'a', skill.skillName);
    a.href = skill.link;
    a.target = '_blank';
  }
  return flipContainer;
}

function handleSkillChange(event) {
  var id = event.target.id;
  var fullSkillId = id.split('.');
  CardTopic.updateSkill(fullSkillId[0],fullSkillId[1],event.target.checked);
  console.log(fullSkillId,event.target.checked);
}

function renderDeck() {
  var container = document.getElementById('CardDeck');
  console.log(container);

  for (var i = 0; i < CardTopic.list.length; i++) {
    container.appendChild(renderCard(i));
  }
}

//getUserName();
createCards();
renderDeck();

/**
 * This is a helper function to add an element with given tag name optional text and class names to the given parent
 *
 * @param {*} parent
 * @param {*} tagName
 * @param {*} text
 * @param {*} className
 * @returns
 */
function addElement(parent, tagName, text, className) {
  var newElement = document.createElement(tagName);
  if (text) {
    newElement.textContent = text;
  }
  if (className) {
    newElement.className = className;
  }
  if (parent) {
    parent.appendChild(newElement);
  }
  return newElement;
}
