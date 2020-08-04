class Person {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  message() {
    return "Hi attacking";
  }
}

class Emma extends Person {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}
Emma.prototype.message; //js create for us
const emma = new Emma("emma", "shio", "wea", 90);

console.log(emma);
//checking
//console.log(Emma.prototype.isPrototypeOf(emma));
console.log(emma instanceof Emma);
