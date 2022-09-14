const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]

// console.log(cardArray);
cardArray.sort(() => 0.5 - Math.random())  //shortcut to shuffling an array randomly
// console.log(cardArray);

const flexboxDisplay = document.querySelector('#flexbox');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];   //not const we will be changing it later
let cardsChosenIds = [];
const cardsWon = [];  //we wanna know how many matches we exactly have

//create our board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        ///
        card.addEventListener('click', flipCard)
        //we aren't calling flickCard once we click.....
        // when we click on card it will flip
        ///
        flexboxDisplay.appendChild(card)
        // console.log(card, i);
    }
}

createBoard();

//flip the card when we click it.
function flipCard() {
    const cardId = this.getAttribute('data-id');  //this give whatever we clicked
    // console.log(cardArray[cardId]); //picking from sorted array
    // console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    // // console.log(cardsChosen);
    // // console.log(cardsChosenIds);
    // console.log('CLICKED!!', cardId);
    // console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');    // or #flexbox img
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    // console.log(cards);
    console.log('check for match');

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('YOU HAVE CLICKED THE SAME IMAGE!');
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('YOU FOUND A MATCH!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('SORRY TRY AGAIN!!!');
    }
    resultDisplay.innerText = cardsWon.length;
    cardsChosen = []; //to start this process again
    cardsChosenIds = [];

    //finally
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.innerText = 'Congratulations!, You found them all.';
    }
}

