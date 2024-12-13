
let letterSearch = ["Non", "Olma", "Nok", "Mashina", "Nonushta", "Banan" , "Nevara", "Qoshiq", "Nafl" , "Suv"];

let wordsWithN = [];
let wordsWithoutN = [];


for (let word of letterSearch) {
  if (word.toLowerCase().includes("n")) {
    wordsWithN.push(word);
  } else {
    wordsWithoutN.push(word);
  }
}


console.log("So'zlar 'N' harfi bilan:", wordsWithN);
console.log("So'zlar 'N' harfisiz:", wordsWithoutN);
