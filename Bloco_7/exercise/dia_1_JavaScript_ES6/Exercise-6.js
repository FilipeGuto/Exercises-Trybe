let string = ('Tryber x aqui!')
let newString = 'Bianca'

string.split("x").forEach(word => {
  if (word.trim().length > newString.length) {
    newString = word.trim();
  }
});
console.log(`Tryber ${newString} aqui!`);