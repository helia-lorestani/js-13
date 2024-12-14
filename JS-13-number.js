/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:
let num1 = Math.floor(Math.random() * 15) + 1;
let num2 = Math.floor(Math.random() * 15) + 1;
let count = 0;
let array = [num1, num2];
let temp = 0;
while (count < 8) {
  temp = num1;
  num1 = num2;
  num2 = (temp + num2) * 2;

  array.push(num2);
  count++;
}
console.log(array.join(", "));
