//selecting elmements
const score0El = document.querySelector('.score-0');
const score1El = document.querySelector('.score-1');
const player0El = document.querySelector('.player0');
const player1El = document.querySelector('.player1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.new');
const btnroll = document.querySelector('.roll');
const btnhold = document.querySelector('.hold');
const points0El = document.querySelector('.points-0');
const points1El = document.querySelector('.points-1');

// starting conditions
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
let playing = true;
let scores = [0, 0]

const switchPlayer = function () {
    document.querySelector(`.points-${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
}
// dice roll functionality
btnroll.addEventListener('click', function () {
    if (playing) {
        // generate random number
        const dice = Math.trunc(Math.random() * 6) + 1;

        // display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice${dice}.png`;

        // check for roll > 1
        if (dice !== 1) {
            // add dice to current sore
            document.querySelector(`.points-${activePlayer}`).textContent = currentScore += dice;
            // i could have simply typed currentSccore += dice 
            // to know the current player rolling the dice
            document.querySelector(`.points-${activePlayer}`).textContent = currentScore;        
        } else {
            // switch to next player
            switchPlayer()
        }
    }
});

// user holds score

btnhold.addEventListener('click', function () {
    if (playing) {
      // add current score to total score
      scores[activePlayer] += currentScore;

      // display total score
      document.querySelector(`.score-${activePlayer}`).textContent =
        scores[activePlayer];

      if (scores[activePlayer] >= 20) {
        playing = false;
        diceEl.classList.add('hidden');
        document
          .querySelector(`.player${activePlayer}`)
          .classList.add('winner');
      }
      // go to next player
      switchPlayer();
    }
})

// reset game
btnNew.addEventListener('click', function () {
    score0El.textContent = 0
    score1El.textContent = 0
    points0El.textContent = 0
    points1El.textContent = 0
    player0El.classList.remove('winner')
    player1El.classList.remove('winner')
    currentScore = 0
    scores = [0, 0]
    playing = true
    diceEl.classList.add('hidden')
    switchPlayer()
})



