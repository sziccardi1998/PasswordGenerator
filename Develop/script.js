// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create passwordOptions
function passwordOptions() {
  // ask for the options needed for the password repeat until the user is satisfied with choices
  var userValidation = false;
  while(!userValidation) {
    var lowerCaseNeeded = confirm("Do you need lower case characters?");
    var upperCaseNeeded = confirm("Do you need upper case characters?");
    var specialNeeded = confirm("Do you need special characters?");
    var numbersNeeded = confirm("Do you need numbers?");
    var passwordLength = prompt("Enter a length of at least 8 and no longer than 128.");
    // check that the length requirments are met and repeat until they are met
    while ((parseInt(passwordLength) < 8) ||(parseInt(passwordLength)>128)){
      passwordLength = prompt("Enter a length of at least 8 and no longer than 128.");
    }
    // validate answers
    userValidation = confirm("Is this selection correct:\n" + "lower case: " + lowerCaseNeeded + "\nupper case: " + upperCaseNeeded + "\nspecial characters: " + specialNeeded + "\nnumbers: " + numbersNeeded + "\nlength: " + passwordLength);
  }
 
  // store all answers in an array
  var passwordRequirments = [lowerCaseNeeded, upperCaseNeeded, specialNeeded, numbersNeeded, passwordLength];

  // return the array
  return passwordRequirments;
}

// Create generatePassword
function generatePassword() {
  // store the results of passwordOptions
  var specifications = passwordOptions();
  // check requirments and add to possible characters
  var possibleCharacters = "";

  // create boolean checks to be used in validation
  var lowerCheck = false;
  var upperCheck = false;
  var specialCheck = false;
  var numberCheck = false;
  var allLower = "abcdefghijklmnopqrstuvwxyz";
  var allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var allNum = "1234567890";
  var allSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  if(specifications[0] == true){
    possibleCharacters = possibleCharacters + allLower;
    lowerCheck = true;
  }

  if(specifications[1] == true){
    possibleCharacters = possibleCharacters + allUpper;
    upperCheck = true;
  }

  if(specifications[2] == true){
    possibleCharacters = possibleCharacters + allSpecial;
    specialCheck = true;
  }

  if(specifications[3] == true){
    possibleCharacters = possibleCharacters + allNum;
    numberCheck = true;
  }

  var testCharacter = "";
  // stop running once all conditions have been met
  while ((lowerCheck)||(upperCheck)||(specialCheck)||(numberCheck)) {
    var generatedPassword = "";
    var addedCharacter = "";
    for(var i=0; i<parseInt(specifications[4]); i++){
      // choose random characters to add to the password
      addedCharacter = possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)];
      generatedPassword = generatedPassword + addedCharacter;
    }
    // begin validating password meets character criteria
    for (var j = 0; j < generatedPassword.length; j++) {
      testCharacter = generatedPassword[j];
      if (allUpper.includes(testCharacter)) {
        upperCheck = false;
      }
      else if (allLower.includes(testCharacter)) {
        lowerCheck = false;
      }
      else if (allNum.includes(testCharacter)) {
        numberCheck = false;
      }
      else if (allSpecial.includes(testCharacter)){
        specialCheck = false;
      }
    }
  }
  // create empty string to store generated password in
  // validate that the password contains at least one of each required set of characters

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
