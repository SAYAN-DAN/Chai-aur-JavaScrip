function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(7));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const Tea = new createUser("Tea", 35);

console.log(chai);
console.log(Tea);
chai.printMe();
Tea.printMe();
