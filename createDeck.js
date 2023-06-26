// create deck of 52 cards
export const createDeck = () => {
  const deck = [];
  const suites = ["H", "C", "D", "S"];
  const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];

  suites.forEach((suite) => {
    values.forEach((value) => {
      const combined = `${value}-${suite}`;
      deck.push(combined);
    });
  });

  return deck;
};
