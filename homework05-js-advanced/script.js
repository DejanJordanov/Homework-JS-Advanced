// Function 1

function getDigits(number) {
  if (number < 0) {
    return number.toString().length - 1;
  }
  return number.toString().length;
}

console.log(getDigits(46432));

// Function 2

function oddOrEven(number) {
  if (number % 2 === 0) {
    console.log(`The number ${number} is even.`);
  } else {
    console.log(`The number ${number} is odd.`);
  }
}

oddOrEven(12);
oddOrEven(9);

// Function 3

function positiveOrNegative(number) {
  if (number > 0) {
    console.log(`The number ${number} is a positive number.`);
  } else if (number < 0) {
    console.log(`The number ${number} is a negative number.`);
  } else {
    console.log(`The number zero is neither positive nor negative.`);
  }
}

positiveOrNegative(12);
positiveOrNegative(-7);
positiveOrNegative(0);

console.log("=============");

function allThreeFunctions(number) {
  console.log(getDigits(number));
  oddOrEven(number);
  positiveOrNegative(number);
}

allThreeFunctions(2332);
