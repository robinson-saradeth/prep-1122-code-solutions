function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(c) {
  return c * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  var greeting = 'Hello, ' + name + '!';
  console.log(greeting);
}

getGreeting('World');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  var fullname = firstName + ' ' + lastName;
  console.log(fullname);
}

getFullName('Juan', 'Ramirez');

function cube(number) {
  return Math.pow(number, 3);
}

var cubeResult = cube(5);
console.log(cubeResult);
