var userNumberInput = parseInt(prompt("Inserica un numero"));
var userNumberList = [];
var listItem;

for (var i = 1; i <= userNumberInput; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    listItem = "FizzBuzz";
    userNumberList.push(listItem);
  } else if (i % 5 == 0) {
    listItem = "Buzz";
    userNumberList.push(listItem);
  } else if (i % 3 == 0) {
    listItem = "Fizz";
    userNumberList.push(listItem);
  } else {
    listItem = i;
    userNumberList.push(listItem);
  }

  console.log(listItem);
  document.getElementById("listFizzBuzz").innerHTML +=
    "Numero: " + listItem + "\n";
}

console.log(`Ecco la sua lista FizzBuzz: ${userNumberList}`);
