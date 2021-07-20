//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindrome(palavra) {
  let lastSting = palavra.length -1;
  let inversePalavra = '';

  for (let index = lastSting; index >= 0; index -=1) {
  inversePalavra += palavra[index]
  }
  return palavra === inversePalavra;
};

let result = palindrome('reter');
console.log(result);