const specialArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
  "/",
  ":",
  ";",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~",
];
const lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const generateButton = document.getElementById("generateBtn");
generateButton.addEventListener("click", writePassword);

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Prompts and Validation
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a number between 8 and 128 - Refresh the page and try again");
    return null;
  }

  var numbers = confirm("Do you want to use numbers in your password?");

  var lowerCases = confirm("Do you want to use lowercases in your password?");

  var upperCases = confirm("Do you want to use uppercases in your password?");

  var special = confirm("Do you want to use special characters in your password?");

  if (!numbers && !lowerCases && !upperCases && !special) {
    alert("Please pick criteria - Refresh the page and try again");
    return null;
  }

  // Minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount = 0;
    var chosenChar = [];

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
