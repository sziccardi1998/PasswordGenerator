// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create passwordOptions
function passwordOptions() {
  // ask for the options needed for the password
  var lowerCaseNeeded = alert("Do you need lower case characters?");
  var upperCaseNeeded = alert("Do you need upper case characters?");
  var specialNeeded = alert("Do you need special characters?");
  var numbersNeeded = alert("Do you need numbers?");
  var passwordLength = prompt("Enter a length of at least 8 and no longer than 128.");

  // validate answers
  var userValidation = alert("Is this selection correct:\n" + "lower case: " + lowerCaseNeeded + "\nupper case: " + upperCaseNeeded + "\nspecial characters: " + specialNeeded + "\nnumbers: " + numbersNeeded + "\nlength: " + passwordLength);
  // repeate until correct
  while(!userValidation) {
    var lowerCaseNeeded = alert("Do you need lower case characters?");
    var upperCaseNeeded = alert("Do you need upper case characters?");
    var specialNeeded = alert("Do you need special characters?");
    var numbersNeeded = alert("Do you need numbers?");
    var passwordLength = prompt("Enter a length of at least 8 and no longer than 128.");
    var userValidation = alert("Is this selection correct:\n" + "lower case: " + lowerCaseNeeded + "\nupper case: " + upperCaseNeeded + "\nspecial characters: " + specialNeeded + "\nnumbers: " + numbersNeeded + "\nlength: " + passwordLength);
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


}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
