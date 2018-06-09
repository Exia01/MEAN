class Ninja {
  constructor(name, health, speed, strength) {
    this.name = name;
    this.health = health;
    this.speed = new Closerure(speed);
    this.strength = new Closerure(strength);
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
      "Name:" +
      this.name +
      "| Health: " +
      this.health +
      "| Speed: " +
      this.speed() +
      "| Strength: " +
      this.strength()
    );
  }
  drinkSake() {
    this.health += 10;
  }
}

let pupil1 = new Ninja("Katsuke", 150, 50, 50);

pupil1.sayName();
console.log(pupil1.showStats());
pupil1.drinkSake();
console.log(pupil1.showStats());
