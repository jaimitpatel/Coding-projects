// Assignment code herel

const characterAmountRange = document.getElementById 
('CharacterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeSymbolsElement = document.getElementById
('includeSymbols')
const includeNumbersElement = document.getElementById
('includeNumbers')

const form = document.getElementById('passwordGeneratorForm')
const passwordDis = document.getElementById('passwordDis')


const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES= arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))




characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e=> {
  e.preventDefault()
  const characterAmount = characterAmount.value
  const includeUppercase = includeUppercaseElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const includeNumbers = includeNumbersElement.checked
  const password= generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDis.innerText= password
})

function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charcodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charcodes = charcodes.concat (NUMBERS_CHAR_CODES)
  if (includeSymbols) charcodes = charcodes.concat(SYMBOLS_CHAR_CODES)
  const passwordCharacters = []
  for (let e= 0; e < characterAmount; e++) {
    const characterCode = charcodes [Math.floor(math.random() * characterAmount)]
    passwordCharacters.push(string.fromcharcode(characterCode))

  }
  return passwordCharacters.join('')
  console.log(LOWERCASE_CHAR_CODES)

}

function arrayFromLowToHigh (low, high) {
  const array = []
  for (let e= low; e <= high; e++){
    array.push(e)
  }
    return array

}






function syncCharacterAmount(e) {
  const value = e.target.value
  CharacterAmountNumber.value = value
  CharacterAmountRange.value = value

}
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

