//Cameron's answer
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
class Deck {
  constructor() {
    let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    this.cards = [];
    for (let i = 0; i < suits.length; i++) {
      let face = " ";
      for (let j = 1; j < 14; j++) {
        switch (j) {
          case 1:
            face = "Ace";
            break;
          case 11:
            face = "Jack";
            break;
          case 12:
            face = "Queen";
            break;
          case 13:
            face = "King";
            break;
          default:
            face = String(j);
        }
        let card = new Card(suits[i], face);
        this.cards.push(card);
      }
    }
  }
  shuffle() {
    for (let i = 0; i < 52; i++) {
      let tmp = this.cards[i];
      let rnd = Math.floor(Math.random() * 52);
      this.cards[i] = this.cards[rnd];
      this.cards[rnd] = tmp;
    }

    return this.cards;
  }

  deal() {
    return this.cards.pop();
  }

  display() {
    return this.cards;
  }
}

var deck = new Deck();
//console.log(deck.display());

deck.shuffle();
console.log(deck.deal());
console.log(deck.display());
