/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrase = [];
    this.activePhrase = null;
  }
  /*
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases = function () {
    const array = [
      "Phrase : life is like a box of chocolates",
      "Phrase : there is no trying",
      "Phrase : may the force be with you",
      "Phrase : you have to see the matrix for yourself",
      "Phrase : you talking to me",
    ];
    return array;
  };
  phrase = [createPhrases()];
}
