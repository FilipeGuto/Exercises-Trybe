const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo.';
    ifScope = ifScope + ' Ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo';
    console.log(elseScope);
  }
}

testingScope(true);