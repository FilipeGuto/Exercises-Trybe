// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.


let quadrado = 5;
let linha = ''
let asteristico = '*'

for (let index = 0; index < quadrado; index += 1) {
  for (let index2 = 0; index2 < index + 1; index2 += 1) {
    linha = linha + asteristico
    }
  console.log(linha);
  linha = '';
  }