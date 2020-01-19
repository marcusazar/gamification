
// ------------------------------------------------------- //
//  In this file you write your logic. Feel free to write  //
//  your own functions and set your own variables in order //
//  to solve the given problems.                           //
// ------------------------------------------------------- //

/** 
 * This is where your logic should be written. 
 *
 * (In real life this will be called once every few 
 * seconds and get data from some remote server,
 * but in this example we fake that data. The focus
 * is on your javascript, html and css savvy, not 
 * network handling.)
 */
function onLeaderboardUpdate() {
  return getSimulatedLeaderboard();
}

const printData = () => {
  const leaderBtn = document.querySelector('.qs-board-button');
  leaderBtn.addEventListener('click', event => {
     getData();
  })
}

const getData = () => {
  const items = onLeaderboardUpdate();
  sortData(items);
  var board = '<ul>';
  items.forEach((item) => {
    if(item.id === 'YOU') {
      board += '<li class="qs-board-item__player">';
      updatePlayerProperty(item);
    } else {
      board += '<li class="qs-board-item">';
    }
    board += '<span>' + item.position + '</span>';
    board += '<span>' + item.id + '</span>';
    board += '<span>' 
    if(item.position < 4) {
      board += '<i class="fa fa-trophy"></i>';
    } else {
      board += '<i class="fa fa-shield"></i>';
    }
    board += item.score + '</span>';
    board += '</li>';
  })
  board += '</ul>';
  document.querySelector('.qs-board-items').innerHTML = board;
}

const sortData = (items) => {
  items.sort((a,b) => {
    return a.position - b.position;
  });
}

const updatePlayerProperty = (item) => {
  const result = document.querySelector('.qs-board-result');
  const lable = document.querySelector('.qs-board-result >lable');
  result.style.display = 'block';
  lable.innerHTML = 'You are in place ' + item.position;
  if(item.position === 1) {
    playSound();
  }
}

const playSound = () => {
  document.querySelector('.qs-board-sound').play();
}

printData();