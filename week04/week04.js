//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log(`question 1`)
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   

   // Do not use numbers to reference the last element, find it programmatically.
   // ages[7] – ages[0] is not allowed!

   let difference = ages[ages.length - 1] - ages[0];
   console.log(difference)
  ages.push(52);

  let newDiff = ages[ages.length - 1] - ages[0];
   console.log(newDiff)
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//1c. Use a loop to iterate through the array and calculate the average age. 

let allAge =0;
for( let i=0; i<ages.length; i++){
    allAge+=ages[i];
}

let average = allAge/ages.length;
console.log(average);
//2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log(`question 2`)
let names= [`Sam`, `Tommy`, `Tim`, `Sally`, `Buck`, `Bob`]
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;
console.log(averageLetters);
//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let concatenatedNames = '';

for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + ' ';
}

console.log(concatenatedNames);

//3.  How do you access the last element of any array?
console.log(`question 3`)
let lastElement= names[names.length-1]
console.log(lastElement)
//4.  How do you access the first element of any array?
console.log(`Question 4`)
let firstElement=names[0]
console.log(firstElement);
//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log(`Question 5`)
//For example:
//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array
console.log(`Question 5`)
let nameLengths=[]
for(let i=0; i<names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths)

//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

console.log(`Question 6`)
let sum=0
for(let i=0; i<nameLengths.length; i++){
   sum+=nameLengths[i]; 
}
console.log(sum);
//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log(`Question 7`);


function concatenateWord(word, n) {
    let result = '';
  
    for (let i = 0; i < n; i++) {
      result += word;
    }
  
    return result;
  }
  
  console.log(concatenateWord(` Hello  `, 3))
//8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
console.log("Question number 8")

function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(fullName('Jean', 'Uwiringiye'))


//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log("Question 9")

function numbers(){
   let arrayNumbers=[50, 30, 40];
   sum = 0;
   for (let i=0; i<arrayNumbers.length; i++){
    sum+=arrayNumbers[i];
    console.log(sum)
   }
   return sum>100;
}
console.log(numbers())

//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log(`Question 10`)

function calculateAverage(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
  
  console.log(calculateAverage([3, 9, 23, 64, 2, 8, 28, 93]))
//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log(`question 11`)

function compareAverages(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;
  
    for (let i = 0; i < array1.length; i++) {
      sum1 += array1[i];
    }
  
    for (let j = 0; j < array2.length; j++) {
      sum2 += array2[j];
    }
  
    let average1 = sum1 / array1.length;
    let average2 = sum2 / array2.length;
  
    return average1 < average2;
  }
  
  console.log(compareAverages([3, 7, 23, 64, 7, 8, 28, 93], [3, 9, 23, 64, 2, 8, 28, 93,98]));
//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log(`question 12`)
function willBuyDrink(isHotOutside,moneyInPocket ){
    return isHotOutside && moneyInPocket >10.50;}
    console.log(willBuyDrink(true, 15.00)); 
    console.log(willBuyDrink(false, 15.00)); 
    console.log(willBuyDrink(true, 5.00)); 


//13.  Create a function of your own that solves a problem.
console.log(`question 13`) 
let sumofEven =(num1, num2)=>{
let sum=0;

for(let i=num1; i<num2;i++){
    if(i%2===0){
        sum+=i;
    }
}

return sum;


}

console.log(sumofEven(2,10));
console.log(sumofEven(10,35))


//In comments, write what the function does and why you created it.
/*I choose this as a way of challenging my self and try out something else other than what was asked in previous questions

so which is why I choose to work with even numbers only as a way for me to practice the new arrow function instead of using the old fashio
function syntax and glad that it worked*/