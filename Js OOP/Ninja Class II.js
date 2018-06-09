class Ninja {
  constructor(name, health, speed, strength) {
    this.name = name;
    this.health = 50;
    this.speed = new Closerure(10);
    this.strength = new Closerure(10);
    var speed = speed;
    var strength = strength;
    function Closerure(x) {
      return function(v) {
        if (v == undefined) {
          return x;
        } else {
          val = v;
        }
      };
    }
  }

  sayName() {
    console.log("Ellow Poppet! My name is", this.name);
  }
  showStats() {
    return (
      this.name +
      " | Health: " +
      this.health +
      " | Speed: " +
      this.speed() +
      " | Strength: " +
      this.strength()
    );
  }
  showTwoStats(y) {
    return (
      this.name +
      " | Health: " +
      this.health +
      " | Speed: " +
      this.speed() +
      " | Strength: " +
      this.strength() +
      "\n" +
      y.name +
      " | Health: " +
      y.health +
      " | Speed: " +
      y.speed() +
      " | Strength: " +
      y.strength() 
    );
  }
  drinkSake() {
    this.health += 10;
  }
  punch(x) {
    x.health -= 5;
    return (
      this.name + " Punched " + x.name + " | " + x.name + " Said:" + "'Oh nahh'"
    );
  }
  kick(x) {
    x.health -= 15;
    this.strength -= 1;
    return (
      this.name +
      " Punched " +
      x.name +
      " | " +
      x.name +
      " Said:" +
      "'Like for real thouuughh"
    );
  }
}

let red = new Ninja("Bob");
let blue = new Ninja("Juicy J");
let green = new Ninja("Juicy J");

// // red.sayName();
// console.log(red.showStats());
console.log(blue.showTwoStats(red));
console.log();
// // pupil1.drinkSake();
// // console.log(pupil1.showStats());

console.log(red.punch(blue) + "\n" + red.showStats() + "\n" + blue.showStats());
// console.log();
// console.log(red.showStats());
// console.log(blue.showStats());

// console.log(red.punch(blue));
// console.log();
// console.log(red.showStats());
// console.log(blue.showStats());
