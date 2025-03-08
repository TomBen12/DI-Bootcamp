// const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
// numbers.toString();

// numbers.join("😃")

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

let myNums = [];

//in bubble sort we go through the array multiple times and check numbers in pair. the largest number in the pair move to the left (or right in ascending sort)

//first i make a for loop to go through all the numbers
for (let i = 0; i < numbers.length; i++) {
  //here i will go through an inner for loop to check
  //numbers in pairs. the length of the inner loop should be -1 because
  //i don't want it to go out of bound in the next steps ([j+1])
  //and i substracted from lenght to make the search shorter and more efficient each iteration will move the largest number to its final possition. so i wont need to check those positions again.
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    //swapping numbers if left greater than right
    //by saving current nuber in temp
    //asigning current with next
    //assigning next with temp (current)
    //else continue to next iteration
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
