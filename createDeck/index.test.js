import { createDeck } from ".";

test("Deck length should be 52 cards", () => {
  const deck = createDeck();
  expect(deck).toHaveLength(52);
});
