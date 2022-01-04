function soma(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      reject("Informe apenas números");
    }
    const result = ((a + b) * c);
    
    if(result < 50) {
      return reject("Valor muito baixo");
    }
      resolve(result);
  })
}

//Exercicio 2

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function chamadaDoRandom() {
  const randomNumbers = Array.from({ length: 3}).map(randomNumber);

  soma(...randomNumbers)
  .then(resolve => console.log(`sucesso: ${resolve}`))
  .catch(error => console.log(`erro: ${error}`));
}

//Exercicio 3 ASYNC

async function chamadaDoRandom() {
  const randomNumbers = Array.from({ length: 3}).map(randomNumber);
  try {
    const result = await doMath(...randomNumbers)
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
