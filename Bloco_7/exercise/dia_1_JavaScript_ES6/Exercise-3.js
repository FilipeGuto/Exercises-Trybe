function fatorial(number) {
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