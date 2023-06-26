// create deck of 52 cards

const suites = ["H", "C", "D", "S"];

const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];

const createDeck = () => {
  const deck = [];

  suites.forEach((suite) => {
    values.forEach((value) => {
      const combined = `${value}-${suite}`;
      deck.push(combined);
    });
  });

  return deck;
};

const randomiseArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const deck = createDeck();
console.log(deck);

// shuffle deck

const shuffledDeck = randomiseArray(deck);

// console.log(shuffledDeck);

const dealCards = (array, cardCount) => {
  // returns array of n cards

  return array.splice(0, cardCount);
};

// console.log(dealCards(deck, 3));

const getPointsPerCard = (card) => {
  switch (card) {
    case "J":
    case "Q":
    case "K":
    case "T":
      return 10;

    default:
      return Number(card);
  }
};

const calculatePoints = (hand) => {
  let points = 0;

  const cardValues = hand.map((card) => {
    const cardValue = card.split("-");
    return cardValue[0];
  });

  // check if there is an ace. if so remove
  const aceIndex = cardValues.findIndex((card) => card === "A");
  const hasAce = aceIndex >= 0;

  if (hasAce) {
    // remove ace from the array.
    cardValues.splice(aceIndex, 1);
  }

  cardValues.forEach((card) => {
    const prevPoints = points;
    const cardValue = card.split("-");
    points += getPointsPerCard(cardValue[0], prevPoints);
  });

  if (hasAce) {
    if (points >= 11) {
      points += 1;
    } else {
      points += 11;
    }
  }

  //
  return points;
};

const points = calculatePoints(dealCards(deck, 3));

// const test1Values = ["A-C", "2-S"];
// const test1Results = calculatePoints(test1Values);
// console.log(test1Results);

//
// const value2 = ["5-D", "T-H"]; // = 15
// const test2 = calculatePoints(value2);

// const value3 = ["A-H", "A-S"]; // = 12

// const test3 = calculatePoints(value3);
const value4 = ["A-C", "7-S", "9-C"]; // = 17
const test4 = calculatePoints(value4);

console.log({
  //   test2,
  //   test3,
  test4,
});
