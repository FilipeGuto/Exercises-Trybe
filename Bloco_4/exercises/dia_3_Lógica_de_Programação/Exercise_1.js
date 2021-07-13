//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let quadrado = 3;
let linha = ''
let asteristico = '*'

if (quadrado > 1); {
for (let index = 0; index < quadrado; index += 1) {
  for (let index2 = 0; index2 < quadrado ; index2 += 1) {
    linha = linha + asteristico;
    }
  console.log(linha);
  linha = '';
  }
}
