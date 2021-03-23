var userNumberInput = parseInt(prompt("Inserica un numero"));
var userNumberList = [];

for (var i = 1; i <= userNumberInput; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    userNumberList.push("Fizzbuzz");
  } else if (i % 5 == 0) {
    userNumberList.push("Buzz");
  } else if (i % 3 == 0) {
    userNumberList.push("Fizz");
  } else {
    userNumberList.push(i);
  }
}

document.getElementById(
  "listFizzBuzz"
).innerHTML = `Ecco la sua lista FizzBuzz: ${userNumberList}`;

console.log(`Ecco la sua lista FizzBuzz: ${userNumberList}`);
