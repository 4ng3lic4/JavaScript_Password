


// Assignment Code
//We declare a gobal variable
var generateBtn = document.querySelector("#generate");

//HEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//Initially, console returns error that generatePassword is not defined, so we need to create the function
function generatePassword() {
  //We use the window object to prompt for the length of the password
  var Info = window.prompt("How many characters do you want your password to have?")
  
  //console.log(message)
  var numOfCharacters = parseInt(Info)

  //We use a boolean to deplare if user's input is withing the criteria

  //It returns a string, but we need it to be a number, so we need the parseInt() function that turns string to a number
 
  if (isNaN(numOfCharacters)) {
    window.alert("Use only numbers please.")
    //We stop the function 
    return 
  }

//We use a boolean statement with a conditional
if (numOfCharacters <8 || numOfCharacters>128){
  window.alert("Password must contain from 8 up to 128 characters")
  //End of function
  return
}
}
  //NOT SURE ABOUT THIS PART//





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
