const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.roll-dice-btn');

// function to generate a random number between 1 to 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// function to update the dice with the rolled value
function updateDice(value) {
  dice.innerHTML = value;
}

// event listener for the roll dice button
rollDiceBtn.addEventListener('click', function() {
  const rolledValue = rollDice();
  updateDice(rolledValue);
});

// create the Ludo board using JavaScript
const board = document.querySelector('.board');

// create the board squares
for (let i = 0; i < 15; i++) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; j < 15; j++) {
    const square = document.createElement('div');
    square.classList.add('square');

    if ((i === 0 && j === 0) || (i === 0 && j === 14) || (i === 14 && j === 0) || (i === 14 && j === 14)) {
      square.classList.add('corner');
    } else if ((i === 0 && j > 0 && j < 14) || (i === 14 && j > 0 && j < 14) || (j === 0 && i > 0 && i < 14) || (j === 14 && i > 0 && i < 14)) {
      square.classList.add('path');
    } else if (i === 7 && j === 7) {
      square.classList.add('center');
    }

    row.appendChild(square);
  }

  board.appendChild(row);
}
