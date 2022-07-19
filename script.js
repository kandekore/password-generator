// Generate Special characters for the function
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById("generateBtn");
generateButton.addEventListener("click", writePassword); // Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
