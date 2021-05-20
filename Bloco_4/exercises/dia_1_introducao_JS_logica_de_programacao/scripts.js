let a = 5;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let par = 28;
let impar = 21;
if (impar > par) {
  console.log(impar);
}
else {
  console.log(par);
}

let par = 8;
let impar = 21;
let centena = 105;
if (impar > par && impar > centena) {
  console.log(impar);
}
else if (par > impar && par > centena) {
  console.log(par);
}
else if (centena > impar && centena> par) {
  console.log(centena);
}

let valor = 0;
if (valor > 0) {
  console.log('positivo');
}
else if (valor < 0) {
  console.log('negativo');
}
else {
  console.log('zero');
}


