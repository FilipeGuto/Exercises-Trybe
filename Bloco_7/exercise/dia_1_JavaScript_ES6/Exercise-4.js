let longestWord = ("Antônio foi no banheiro e não sabemos o que aconteceu");

const result = longestWord
  .match(/\w+/g)
  .sort((a, b) => b.length - a.length)[0];
  
console.log(result);

let big = '';
longestWord.split(" ").forEach(word => {
  if (word.trim().length > big.length) {
    big = word.trim();
  }
});

console.log(big);