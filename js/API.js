
// -------------------------------------------------- //
// YOU MAY USE, BUT NOT MODIFY THE CONTENTS THIS FILE //
//                                                    //
// This file is to provide you the data to complete   //
// the given tasks. It is only a helper class and     //
// should therefor not be modified.                   //
//
// Do however feel free to use it as documentation in //
// order to solve the problems at hand!
// -------------------------------------------------- //

const MAX_ENTRANTS = 15;
let timesCalled = 0; // Helper variable to simulate time passing

/** A dumb helper function that prints a given leaderboard */
function printLeaderboard(leaderboard) {
  for (let i = 0; i < leaderboard.length; i++) {
    let entry = leaderboard[i];
    console.log("#" + entry.position + ": " + entry.id + " (" + entry.score + ")");
  }
}

/** 
 * This function returns a leaderboard where the current player
 * (named "YOU") gets points and progresses depending on how many
 * times this method has been called. 
 *
 * It is meant to be left unmodified.
 * */
function getSimulatedLeaderboard() {
  timesCalled += 1; // Simulate time passing

  let entries = [];
  let playerPosition = MAX_ENTRANTS - timesCalled;
  let clampedPlayerPosition = playerPosition < 0 ? 0 : playerPosition;

  for (var i = 0; i < MAX_ENTRANTS - 1; i++) {
    let generatedId = (i + 1000).toString(16); // Hexadecimal id's are sexier.
    let score = (MAX_ENTRANTS - i) * 500;
    let position = i < clampedPlayerPosition ? i + 1: i + 2;

    if (i == clampedPlayerPosition) {
      let playerId = "YOU"
      let playerScore = (MAX_ENTRANTS - playerPosition) * 500 + 5;
      let playerEntry = { "id": playerId, "position": clampedPlayerPosition + 1, "score": playerScore };
      entries.push(playerEntry);
    }

    let entry = { "id": generatedId, "position": position, "score": score };
    entries.push(entry);
  }

  // In case we're last, we should still be in the leaderboard. 
  // The iterator above just doesn't know better. 
  if (clampedPlayerPosition == MAX_ENTRANTS - 1) {
    let playerId = "YOU"
    let playerScore = 0;
    let playerEntry = { "id": playerId, "position": clampedPlayerPosition + 1, "score": playerScore };
    entries.push(playerEntry);
  }

  // YES, WE KNOW. Unfair to sabotage the order.
  // But this is more like the real world data -
  // the list is correct but doesn't arrive sorted.
  //
  // It's for you to fix it! (AND NOT BY REMOVING THIS LINE!)
  return shuffle(entries);
}

/** 
 * JS implementation of Fisher-Yates shuffle algorithm.
 * Found at https://bost.ocks.org/mike/shuffle/
 * */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
