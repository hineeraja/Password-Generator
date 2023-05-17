// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSpecialchars;
var userChoices;

var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialchars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


//  Function
function generatePassword() {
  
  passwordLength = prompt( "Choose numbers between 8 and 128");

  
  if(!passwordLength) {
    alert("invalid");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("value- between 8 and 128");
  
  
  } else { 
   var confirmLower = confirm("confirm this has lower case letters?");
  
    var confirmUpper = confirm("confirm this has upper case letters?");
   
   var confirmNumber = confirm("confirm this has numbers?");

    var confirmSpecial = confirm("Will this contain special characters?");
    

  };
  var userChoices = [];

  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("You must choose a criteria");
  } else {
    if (confirmLower) {
      userChoices = userChoices.concat(LowerCase);
    }
    if (confirmUpper) {
      userChoices = userChoices.concat(UpperCase);
    }
    if (confirmNumber) {
      userChoices = userChoices.concat(numbers);
    }
    if (confirmSpecial) {
      userChoices = userChoices.concat(specialchars);
    }
  
    console.log(userChoices);
  }
  
var passwordBlank= []
 for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
   
  }
  passwordBlank=passwordBlank.join("");
  console.log(passwordBlank)
  // Join and return the password 
  //var password = passwordBlank;
  console.log("Your Pasword is: " + passwordBlank);
  return passwordBlank;
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


