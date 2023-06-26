import type { Card } from "../types";

export const getPointsPerCard = (card: Card) => {
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

type Hand = string[];

export const calculatePoints = (hand: Hand) => {
  let points = 0;

  const cardValues: Card[] = hand.map((card) => {
    const cardValue = card.split("-");
    return cardValue[0] as Card;
  });

  // check if there is an ace. if so remove
  const aces = cardValues.filter((card) => card === "A");
  const nonAces = cardValues.filter((card) => card !== "A");

  nonAces.forEach((card) => {
    points += getPointsPerCard(card as Card);
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
