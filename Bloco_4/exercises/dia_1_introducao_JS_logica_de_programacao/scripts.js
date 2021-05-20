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

let a = 25;
let b = 30;
let c = 15;
console.log(a + b + c);

let nota = 95;
if (nota >=100 || nota <= 0) {
  console.log('Error');
}
else if(nota >= 90) {
  console.log('A');
}
else if (nota >= 80) {
  console.log('B');
}
else if (nota >= 70) {
  console.log('C');
}
else if (nota >= 60) {
  console.log('D'); 
}
else if (nota >= 50) {
  console.log('E');
}
else if (nota < 50) {
  console.log('F');
}

let number = 22;
  if(number%2 == 0) {
    console.log('Par');
  }
  else {
    console.log('Impar');
  }
