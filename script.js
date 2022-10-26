// Assignment Code
var generateBtn = document.querySelector("#generate");
//set global variables
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
  //ask questions
  let passwordTotal = prompt(
    "Please Choose a number of characters for your password between 8-128"
  );

  if (passwordTotal < 8 || passwordTotal > 128) {
    alert("Please enter a vaild number between 8 and 128");
    return;
  }
  const confirmLower = confirm(
    "Would you like lower case letters in your password?"
  );
  const confirmUpper = confirm(
    "Would you like upper case letters in your password?"
  );
  const confirmNumber = confirm("Would you like numbers in your password?");
  const confirmSpec = confirm(
    "Would you like special characters in your password?"
  );
  //check conditions
  if (confirmLower) {
    choiceArr = choiceArr.concat(letters);
    password += randomize(letters);
    passwordTotal--;
  }
  if (confirmUpper) {
    choiceArr = choiceArr.concat(capLetters);
    password += randomize(capLetters);
    passwordTotal--;
  }
  if (confirmNumber) {
    choiceArr = choiceArr.concat(nums);
    password += randomize(nums);
    passwordTotal--;
  }
  if (confirmSpec) {
    choiceArr = choiceArr.concat(specChar);
    password += randomize(specChar);
    passwordTotal--;
  }
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpec) {
    alert(
      "This password contains no characters please go back and add something"
    );
    return
  }
  //generate password
  function randomize(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  };

  for (let i = 0; i < passwordTotal; i++) {
    password += randomize(choiceArr);
  }

  return password;
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


