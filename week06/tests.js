/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
const assert = require('chai').assert;
const { Card, Deck } = require('./your-deck-file.js'); // replace with your actual file name
*/
const assert = require('chai').assert;
const { Card, Deck } = require('tests.js');

describe('Deck', function() {
  describe('#deal()', function() {
    it('should remove and return the top card of the deck', function() {
      const deck = new Deck();
      const topCard = deck.cards[deck.cards.length - 1];
      const dealtCard = deck.deal();
      assert.deepEqual(dealtCard, topCard);
      assert.equal(deck.cards.indexOf(topCard), -1);
    });
    
    it('should throw an error if the deck is empty', function() {
      const deck = new Deck();
      while (deck.cards.length > 0) {
        deck.deal();
      }
      assert.throw(() => { deck.deal(); }, Error, 'Deck is empty');
    });
  });
});