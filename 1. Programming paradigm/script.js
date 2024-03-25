class Animal {
  constructor(type) {
    this.type = type;
  }

  breath() {
    return 'hu ~~ ';
  }

  makesound() {}
}

class Dog extends Animal {
  makesound() {
    return '멍멍';
  }
}
class Cat extends Animal {
  makesound() {
    return '야옹';
  }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.makesound());
console.log(cat.makesound());
