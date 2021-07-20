//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaiorValor() {
  let valor = 0
  for(let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > valor) {
    valor = numbers[index] 
    }
  }
  return valor;
}

let numbers = [2, 3, 6, 7, 10, 1];
console.log(indiceMaiorValor(numbers));



