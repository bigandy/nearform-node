export const getPointsPerCard = (card) => {
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

export const calculatePoints = (hand) => {
  let points = 0;

  const cardValues = hand.map((card) => {
    const cardValue = card.split("-");
    return cardValue[0];
  });

  // check if there is an ace. if so remove
  const aces = cardValues.filter((card) => card === "A");
  const nonAces = cardValues.filter((card) => card !== "A");

  nonAces.forEach((card) => {
    const prevPoints = points;
    points += getPointsPerCard(card, prevPoints);
  });

  if (aces.length > 0) {
    for (let i = 0; i < aces.length; i++) {
      if (points >= 11) {
        points += 1;
      } else {
        points += 11;
      }
    }
  }
  return points;
};
