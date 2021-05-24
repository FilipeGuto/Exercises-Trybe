// Agora inverta o lado do triângulo

let quadrado = 5;
let linha = ''
let asteristico = '*'

for (let index = 0; index < quadrado; index += 1) {
  for (let index2 = 0; index2 < index + 1; index2 += 1) {
    linha = linha + asteristico;
  }
  console.log(linha);
  linha = '';
}