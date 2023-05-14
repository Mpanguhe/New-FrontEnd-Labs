/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript DevTools, Debugging, and Unit Tests
  FE Lab Week 06
*/

/* ----------------------------------------------------- */
// Key Term List:
// DevTools
// Chrome/FireFox/Safari/Opera/Microsoft Edge
// Debugging
// TDD (Test Driven Deployment)
// BDD (Behavior Driven Deployment)
// Mocha/Chai
// assert/expect
// describe/it/equal/to/deep
// console.table()

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
    this.shuffle();
  }
  
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
  deal() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }
  
  playCard() {
    return this.hand.pop();
  }
  
  addPoints(points) {
    this.points += points;
  }
  
  setHand(hand) {
    this.hand = hand;
  }
}

class War {
  constructor(player1Name, player2Name) {
    this.deck = new Deck();
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.dealCards();
  }
  
  dealCards() {
    const hand1 = [];
    const hand2 = [];
    for (let i = 0; i < 26; i++) {
      hand1.push(this.deck.deal());
      hand2.push(this.deck.deal());
    }
    this.player1.setHand(hand1);
    this.player2.setHand(hand2);
  }
  
  playRound() {
    const card1 = this.player1.playCard();
    const card2 = this.player2.playCard();
    if (this.getCardValue(card1) > this.getCardValue(card2)) {
      this.player1.addPoints(1);
    } else if (this.getCardValue(card1) < this.getCardValue(card2)) {
      this.player2.addPoints(1);
    }
  }
  
  getCardValue(card) {
    const values = {'ace': 14, 'king': 13, 'queen': 12, 'jack': 11};
    return values[card.rank] || parseInt(card.rank);
  }
  
  playGame() {
    for (let i = 0; i < 26; i++) {
      this.playRound();
    }
    this.displayResult();
  }
  
  displayResult() {
    console.log(`${this.player1.name} got ${this.player1.points} points.`);
    console.log(`${this.player2.name} got ${this.player2.points} points.`);
    if (this.player1.points > this.player2.points) {
      console.log(`${this.player1.name} wins!`);
    } else if (this.player1.points < this.player2.points) {
      console.log(`${this.player2.name} wins!`);
    } else {
      console.log(`It is a tie!`);
    }
  }
}

const game = new War('Player 1', 'Player 2');
game.playGame();
