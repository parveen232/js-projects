const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

function randomSquare() {
    for (let square of squares) {
        square.classList.remove('mole');
    }

    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    //for each time we hit the mole get a point
    hitPosition = randomPosition.id;
}
// randomSquare();


//for moving mole
function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole();

//for each time we hit the mole get a point
for (let square of squares) {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            score.innerHTML = result;
            //now score increase only by 1 not going above one, if we click more than one
            hitPosition = null;
        }
    })
}

//for time left
function countDown() {
    currentTime--
    timeLeft.innerHTML = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);