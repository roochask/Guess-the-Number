/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    domEvents();
  }

function domEvents(){
    //  for(let i = 0;i < document.body.children.length; i++){
    //    alert(document.body.children[i].innerHTML);
    //    alert(document.body.children[i].innerText);
    //  }
    //alert(document.body.firstChild.wholeText);
    //alert(document.body.firstElementChild.innerHTML);
    //alert(document.body.lastElementChild.innerHTML);

}


/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById('number-guess').value;
  //console.log(numberGuess);
  displayResult(numberGuess); 
  saveGuessHistory(numberGuess);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *

function displayResult(numberGuess){
// if((numberGuess>64 && numberGuess<91) ||(numberGuess>96 && numberGuess<123)){
  //document.getElementById("result").innerHTML = "Please Enter Number";
 //}
 if (numberGuess < correctNumber)
  {
      showNumberBelow();
      /*//console.log("Your guess is too low!");
      //document.getElementById("result").innerHTML = "Your guess is too low!"; practise purpose*/
  }   
  else if(numberGuess > correctNumber){
      showNumberAbove();
      //console.log("Your guess is too high!");
      //document.getElementById("result").innerHTML = "Your guess is too high!";
  }
  else if(numberGuess == correctNumber)
  {
      showYouWon();
      //console.log("Awesome job, you got it!");
      //document.getElementById("result").innerHTML = "Awesome job, you got it!";
  }
}

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  // Reset the correctNumber
  // Reset the result 
  // Reset the guesses array 
  // Reset the guess history display
  console.log("Inside initGame() function");
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory(); // As guesses is empty array.
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  let randomNumber = Math.random();
  let wholeNumber =  Math.floor(randomNumber * 100) + 1; 
  /*bcoz Math.random is exclusively 1, 
  we will never get 100 number.
  therefore + 1 is written.*/
  return wholeNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
  console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length-1; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while(index >=0) {
    list += "<li class='list-group-item'>" + "Your guessed " 
    + guesses[index] + "</li>";
    index--;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

 function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won',text);
  //console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}
