class Animal {
  constructor(name, age, status, legs, species) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = legs;
    this.species = species;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    super.legs = 0;
    super.species = "Shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    super.legs = 4;
    super.species = "Cat";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.master = master;
    super.legs = 4;
    super.species = "Dog";
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

const hiu = new Shark("Baby Shark", 4, "Swimming");
const kucing = new Cat("CingNing", 5, "Eating");
const anjing = new Dog("Doggy", 8, "Playing", "John Doe");

console.table([hiu, kucing, anjing]);
console.log(anjing.greetMaster());
console.log(kucing.introduce());
