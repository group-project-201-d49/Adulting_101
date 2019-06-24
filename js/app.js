'use strict';

//Global variables

/* 
Alert user to submit their name. Store their name in local storage. Store in name: 'value'.

Build a contructor function that builds each topic/card and their properties and methods. There will be an array storing the content of the checklist skills. Push each checked box event to local storage.

We will need an event listener for when the user checks off a skill. This will be used in the score field at the bottom, and tallied for the trophies.

To track the topic/cards completion we will need to iterate through the objects skill array.length and when the array is complete trigger logic to complete the topic/card and award the matching trophy.

Stretch goal of a pop up window when cards are completed congratulating the user with their name and instructing them to check out their trophy on the score page.
*/

//User name requested with a form, use css to hide the structure after the introduction and user input is completed
var user = {
  name: ' '
}

/**
 * Constructor function for cards
 *
 * @param {*} topic Describes the topic title for the card and its content
 */

function CardTopic (topicName) {
  this.topicName = topicName;
  this.topicSkillList = [];
  var skillComplete = 0;
  CardTopic.list.push(this);
}

//Array of card topics
CardTopic.list =[];

//Prototype to add skills to each card
CardTopic.prototype.newSkill(skillName, link) {
  this.topicSkillList.push(skill);
}

//Prototype to count completion of the skill for each card
CardTopic.prototype.skillsComplete {

}

//Prototype to count completion of the skills across topics (total skills completed)
