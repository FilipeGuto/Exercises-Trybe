// Agora inverta o lado do triângulo

let quadrado = 5;
let linha = ''
let asteristico = '*'
let space = ' '

for (let index = 0; index < quadrado; index += 1) {
  for (let index2 = 0; index2 < index + 1; index2 += 1) {
    linha =linha + asteristico;
  }
  for (let index3 = 0; index3 < quadrado - index -1; index3 += 1) {
    linha = space + linha;
  }
  console.log(linha);
  linha = '';
}