let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index =0; index <numbers.length; index += 1) {
  console.log(numbers[index]);
};

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
for (let index =0; index <numbers.length; index += 1) {
  soma = soma + numbers[index];
};
console.log(soma);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let media = 0
for (let index =0; index <numbers.length; index += 1) {
  soma = soma + numbers[index];
  media = soma / numbers.length;
};
if (media > 20) {
  console.log('valor maior que 20');
}
else {'valor menor que 20'};

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0
for (let index =0; index <numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log(maior);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0
for (let index =0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !==0 ) {
    console.log(impar = numbers[index]);
  }
  else if (numbers[index] % 2 !==0 === 0) {
    console.log('nenhum valor ímpar encontrado');
  }
}