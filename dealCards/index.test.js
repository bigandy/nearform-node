import { dealCards } from ".";
import { createDeck } from "../createDeck";

test("Testing dealCards", () => {
  const deck = createDeck();
  expect(deck).toHaveLength(52);

  const dealtCards = dealCards(deck, 3);
  expect(dealtCards).toHaveLength(3);
  expect(deck).toHaveLength(52 - 3);
});
