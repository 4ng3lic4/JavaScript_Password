


// Assignment Code
//We declare a gobal variable
var generateBtn = document.querySelector("#generate");


//We define the function to return integer in and create a new local variable 

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var any = Math.random();
  return Math.floor(min * (1 - any) + any * max);
}


//We create a function to get the random position from the list

function pickRandom(CharacterData) {
  return CharacterData[randomInt(0, CharacterData.length)];

}





//HEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//Initially, console returns error that generatePassword is not defined, so we need to create the function
function generatePassword() {
  //We use the window object to prompt for the length of the password
  var Info = window.prompt("How many characters do you want your password to have?");

  //console.log(message)
  var numOfCharacters = parseInt(Info);

  //We use a boolean to deplare if user's input is withing the criteria

  //It returns a string, but we need it to be a number, so we need the parseInt() function that turns string to a number

  if (isNaN(numOfCharacters)) {
    window.alert("Use only numbers please.");
    //We stop the function 
    return;
  }

  //We use a boolean statement with a conditional if the number of characters is less than 8, there will be an alert
  if (numOfCharacters < 8 || numOfCharacters > 128) {
    window.alert("Password must contain from 8 up to 128 characters");
    //End of function
    return;
  }

  //WHEN asked for character types to include in the password 
  //THEN I confirm whether or not to include lowercase,

  //User wants lowercase
  var lowerCase = window.confirm("Do you want to use lower case?");

  // User wants uppercase,
  var upperCase = window.confirm("Do you want to use uppercase ?");

  //User wants numeric, and/or
  var numeric = window.confirm("Do you want to use numbers?");

  //User wants  special characters 
  var specialCharacters = window.confirm("Do you want to use special characters?");


  //WHEN I answer each prompt THEN my input should be validated 
  //and at least one character type should be selected
  //After declaring the variables, we put them in an array and weclare a new variable to store the data

  var lowerCaseData = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var upperCaseData = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var numericData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharactersData = ["!", "%", "ñ", "$", "&", "@", "*", "+", "Ç", "#"];


  //var with the options the user selected
  var optionsSelected = [numericData];

  //Conditional that pushes  the data https://www.w3schools.com/jsref/jsref_push.asp


  if (lowerCase === true) {
    optionsSelected.push(lowerCaseData);
  }

  if (upperCase === true) {
    optionsSelected.push(upperCaseData);
  }

  if (numeric === true) {
    optionsSelected.push(numericData);
  }

  if (specialCharacters === true) {
    optionsSelected.push(specialCharactersData);
  }

  //Function to stop the prompts if user selects NO to everything
  if (!lowerCase && !upperCase && !numeric && !specialCharacters ){
    window.alert("Please select at least one.");
    return
  }

  

  //We need a variable that will store the string with the password with the added random character
  //to each iteratio of the four loop that iterates however
  //many times the password length

  var password = "";
  // We need a random value from the array, therefore we can use Math.random 
  for (var i = 0; i < numOfCharacters; i++) {
  
    //We will pick an item in a random position
    var randomCharacter = pickRandom(optionsSelected)
    var pickedCharacter = pickRandom(randomCharacter)
password= password+pickedCharacter;
    console.log(pickedCharacter)
  }
return password
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
