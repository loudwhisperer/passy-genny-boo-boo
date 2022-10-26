// Assignment Code
// let passwordTotal;
// const lengthMessage = () => {
//   prompt(
//     "Please Choose a number of characters for your password between 8-128"
//   );
//   if (isNaN(passwordTotal)) {
//     alert("Please enter a valid number between 8-128");
//     passwordTotal = lengthMessage();
//   } else if (passwordTotal < 8) {
//     alert("Please enter a number greater than 8 characters");
//     passwordTotal = lengthMessage();
//   } else if (passwordTotal > 128) {
//     alert("Please enter a number less than 128 characters");
//     passwordTotal = lengthMessage();
//   }
// };

    
var generateBtn = document.querySelector("#generate");
const generatePassword = () => {
  let password = "";
  let choiceArr = [];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = [
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
  const capLetters = [
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
  const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  let passwordTotal;
  const lengthMessage = () => {
    prompt(
      "Please Choose a number of characters for your password between 8-128"
    );
    if ((passwordTotal = typeOf(number))) {
      passwordTotal = lengthMessage();
    } else if (isNaN(passwordTotal)) {
      alert("Please enter a valid number between 8-128");
      passwordTotal = lengthMessage();
    } else if (passwordTotal < 8) {
      alert("Please enter a number greater than 8 characters");
      passwordTotal = lengthMessage();
    } else if (passwordTotal > 128) {
      alert("Please enter a number less than 128 characters");
      passwordTotal = lengthMessage();
    }
  };
   if (confirm("Would you like lower case letters in your password?")) {
     choiceArr = choiceArr.concat(letters);
   } else {
     choiceArr;
     return false;
   }
   if (confirm("Would you like upper case letters in your password?")) {
     choiceArr = choiceArr.concat(capLetters);
   } else {
     choiceArr;
     return false;
   }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(nums);
  } else {
    choiceArr;
    return false;
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specChar);
  } else {
     choiceArr;
    return false;
   }
  // if (confirm("Would you like lower case letters in your password?")){
  //   choiceArr = choiceArr.concat(letters)
  // } else if (confirm("Would you like upper case letters in your password?")) {
  //   choiceArr = choiceArr.concat(capLetters);
  // } else if (confirm("Would you like numbers in your password?")) {
  //   choiceArr = choiceArr.concat(nums);
  // } else if (confirm("Would you like special characters in your password?")) {
  //   choiceArr = choiceArr.concat(specChar);
  // } else {
  //   choiceArr;
  //   return false;
  // }
  return choiceArr;

};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//window.prompt
//window.confirm
//window.alert
