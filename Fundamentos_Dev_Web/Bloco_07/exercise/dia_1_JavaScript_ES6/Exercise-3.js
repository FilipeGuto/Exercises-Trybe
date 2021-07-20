const fatorial = (number) => {
  if (number === 0) {
    return 1;
  }
  let resp = number;
  while (number > 2) {
    resp *= --number;
  }
  return resp;
}

console.log(fatorial(4));


const factorial = (n) => (n === 1 || n === 0) ? 1 : n * factorial(n -1);

console.log(factorial(5));