//Extract the first four characters from the string below;
"beautiful"
let word = "beautiful";
let txt = word.slice(0, 4);
console.log(txt)

//Replace the following string of the below variable:
//"appetite" with "meal"
let food = "I did not have appetite today";
let newWord = food.replace("appetite", "meal");
console.log(newWord)

//Convert the following strings into the specified format:
//1. UpperCase: "CONfidant"
//2. LowerCase:  "beautiFUL"
//3. Title case "A busy office"

let name1 = "CONfidant";
let nameCase = name1.toUpperCase();
console.log(nameCase)

let name2 = "beautiFUL"
let wordCase = name2.toLowerCase();
console.log(wordCase)

let name3 = "A busy office";
let text = name3.toLocaleUpperCase()
console.log(text)

//Using JavaScript, find the following words from the following strings:
//1. "market"
//const string1 = "The lady went to the market with her sister";
//2. "season"
//const string2 = "My favorite season is spring"
const string1 = "The lady went to the market with her sister";
const index1 = string1.indexOf("market");
console.log(index1)

const string2 = "My favorite season is spring";
const index2 = string2.indexOf("season");
console.log(index2)