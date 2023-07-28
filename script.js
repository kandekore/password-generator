// Arrays
const specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
const lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Get references to the #generateBtn element
const generateButton = document.getElementById("generateBtn");
generateButton.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompts and Validation
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for your new password. It must be between 8 and 128 characters."
  );

  // Validate password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid input! Password length must be between 8 and 128.");
    return null;
  }

  var numbers = confirm("Do you want to include numbers in your password?");
  var lowerCases = confirm("Do you want to include lowercase letters in your password?");
  var upperCases = confirm("Do you want to include uppercase letters in your password?");
  var special = confirm("Do you want to include special characters in your password?");

  if (!numbers && !lowerCases && !upperCases && !special) {
    alert("You must select at least one character type. Please try again.");
    return null;
  }

  // Create a pool of characters based on user preferences
  var chosenChar = [];
  if (numbers) chosenChar = chosenChar.concat(numbersArr);
  if (lowerCases) chosenChar = chosenChar.concat(lowerCaseArr);
  if (upperCases) chosenChar = chosenChar.concat(upperCaseArr);
  if (special) chosenChar = chosenChar.concat(specialArr);

  var randomPasswordGenerated = "";

  // Generate the random password using characters from the chosenChar array
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * chosenChar.length);
    var randomCharPicked = chosenChar[randomIndex];
    randomPasswordGenerated += randomCharPicked;
  }

  return randomPasswordGenerated;
}
