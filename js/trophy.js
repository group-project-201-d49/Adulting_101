'use strict';

//Global variables
/**
 * this renders one card and returns the index for that card
 *
 */
function renderCard(aCardTopicIndex) {
  //locate container div document.getElementById CardDeck
  //use helper funct. add element to build out HTML with

  var card = CardTopic.list[aCardTopicIndex];

  var cardContainer = addElement(undefined, 'div', undefined, 'card-container');
  console.log(cardContainer);

  var front = addElement(cardContainer, 'div', undefined, 'front');
  // TODO Add card.topicIcon to background as watermark.

  addElement(front, 'h2', card.topicName);
  console.log(front);

  var trophyNum = card.cardSkillsComplete();
  var trophyIconSize;
  if (trophyNum === 1) {
    trophyIconSize = '2x';
  } else if (trophyNum === 2) {
    trophyIconSize = '3x';
  } else if (trophyNum >= 3) {
    trophyIconSize = '5x';
  }

  if (trophyNum) {
    var trophyIcon = `fa fa-trophy fa-${trophyIconSize}`;
    addElement(addElement(front, 'p'), 'i', undefined, trophyIcon).style = 'color:teal';
  } else {
    addElement(front, 'h2', `Let\'s push it and earn your trophy in ${card.topicName}!`).style = 'font-size:40px;padding:0 50px';
  }

  for (var i = 0; i < trophyNum; i++) {
    addElement(front, 'i', undefined, 'fa fa-star fa-3x').style = 'color:#d79133';
  }

  var msg1;
  var msg2;
  if (trophyNum === 1) {
    msg1 = '1 down, 2 to go!';
    msg2 = 'Push it!';
  } else if (trophyNum === 2) {
    msg1 = 'You\'re doing great!';
    msg2 = 'Just one more skill to master!';
  } else if (trophyNum >= 3) {
    msg1 = `Great job, ${userName}!`;
    msg2 = `You earned a trophy for your killer ${card.topicName}!`;
  }
  addElement(front, 'h2', msg1);
  addElement(front, 'p', msg2);

  addElement(front, 'i', undefined, 'card-0');
  return cardContainer;
}

function renderTrophyDeck() {
  var container = document.getElementById('CardDeck');
  console.log(container);

  for (var i = 0; i < CardTopic.list.length; i++) {
    container.appendChild(renderCard(i));
  }
}

function populateUserNameSpans() {
  var elements = document.getElementsByClassName('userName');
  console.log('populate names...');
  console.log(elements);
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = userName;
    console.log(elements[i]);
  }
}

//Global variables
populateUserNameSpans();
renderTrophyDeck();
