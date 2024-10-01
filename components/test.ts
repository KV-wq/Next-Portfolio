class Duck {
  fly() {
    console.log("I'm flying");
  }
  quack() {
    console.log("Quack-quack");
  }
}
class RubberDuck extends Duck {
  quack(): void {
    console.log("peep-peep");
  }
  fly(): void {
    console.log("I'm not fly :(");
  }
}
const wildDuck = new Duck();
const rubberDuck = new RubberDuck();
wildDuck.quack();
wildDuck.fly();
rubberDuck.quack();
rubberDuck.fly();
