import { randomiseArray } from ".";
import { createDeck } from "../createDeck";

test("Testing Randomise Array", () => {
  const deck = createDeck();
  expect(deck).toHaveLength(52);

  // specific to this function
  const randomDeck = randomiseArray(deck);
  expect(randomDeck).toHaveLength(52);

  // expect randomDeck to not equal deck
  expect(randomDeck).not.toContainEqual(deck);
});
