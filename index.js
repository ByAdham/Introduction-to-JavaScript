/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/

let votingAge = 21;
let shouldIVote;

if(votingAge>= 18){
  shouldIVote = (true);
}else{
  shouldIVote = (false);
}

console.log (shouldIVote);



/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/
let a = 4;
let b = 0;

if (a <= 4) {
  b = a + b;
}
console.log(b);


/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/
let c = "1999";
function number() {
  Number(c);
  return c;
}
 



/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(x, y){
    /*add your code here*/
  let z= x*y;
  return z;
  }
  multiply(a,b);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(humanAge){
    let ageInDogYears = humanAge*7;
    return ageInDogYears;
}
dogYears(39);




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  
var foodAmount;

function hungryDog(dogAge,dogWeight){
    if (dogAge >=1) {
      if (dogWeight <=5){
      foodAmount = dogWeight*0.05;
      } else if (6 <= dogWeight && dogWeight <= 10) {
        foodAmount = dogWeight*0.04;
      } else if (11<= dogWeight && dogWeight <=15) {
        foodAmount = dogWeight*0.03;
      } else {
        foodAmount = dogWeight*0.02;
      }
    }else{
      if (4/12 >= dogAge && dogAge >= 2/12) {
        foodAmount = dogWeight*0.1
      }
      else if 
        (7/12 >= dogAge && dogAge > 4/12) {
          foodAmount = dogWeight*0.05
        }
        else{foodAmount = dogWeight*0.04}
    }
    return foodAmount;
  }
console.log(hungryDog(1,15));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Use the game function below to do the following:
  1. Receive a string that represents the user's choice (either "rock", "paper", or "scissors")
  2. Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
  3. Return whether the user won, lost, or tied based on these rules of the game described below
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/
//Declare the global variables
let userChoice = "Scissors";
let wordComputerChoice;
let result;

//Generate the computer choice
let numberComputerChoice = Math.random();

// Convert random numbers to rock, paper or scissors
function conversion (randomNumber){
  if (randomNumber < 1/3){
  wordComputerChoice = "Rock"
  }else if (2/3> randomNumber >1/3){
  wordComputerChoice = "Paper"
  } else {
  wordComputerChoice = "Scissors"
  }
  return wordComputerChoice;
}

//Call the conversion on the randomly generated computer number
conversion(numberComputerChoice);

//Play the game
function game(userChoice, wordComputerChoice) 
{
  if (userChoice===wordComputerChoice){
    result ="it's a tie"
  } else {
    if (userChoice ==="Rock" && wordComputerChoice ==="Scissors" ||userChoice ==="Scissors" && wordComputerChoice === "Paper" ||userChoice === "Paper" && wordComputerChoice === "Rock") {
      result = "you win!"
    }
    else {
      result = "you lose!"
    }
  }
  return result;
}

console.log(wordComputerChoice);

console.log(game(userChoice, wordComputerChoice));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

let kms;
let convertedMiles;

function miles(numberOfMiles){
    /*add your code here*/
  convertedMiles = numberOfMiles*0.621371;
  return convertedMiles;
  }

  miles(10);



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

let cms;
let convertedFeet;

function feet(numberOfCMs){
    /*add your code here*/
  convertedFeet = numberOfCMs/30.48;
  return convertedFeet;
  }

  miles(100);
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

let repeat = 5;
function annoyingSong(repititions){
        /*add your code here*/
    for (let i= repeat; i>0; i--) { 
      return `${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i-1} bottles of soda on the wall`
   }
  }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/

let score = 75;
let letterGrade; 
  
function grade(gradeNumber){ 
  if (gradeNumber<60) {
    letterGrade = "you got a "+"F"
    } else if (60 <= gradeNumber && gradeNumber <=69){
      letterGrade ="you got a "+"D"
    } else if (70 <= gradeNumber && gradeNumber <=79){
      letterGrade ="you got a "+"C"
    } else if (80 <= gradeNumber && gradeNumber <=89){
      letterGrade ="you got a "+"B"
    } else {
      letterGrade = "you got a "+"A"
    }
    return letterGrade;
  }

 
  
  grade(score);
 
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
