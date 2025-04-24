const readline = require('readline-sync');

const quantidade = readline.question('Informe um número inteiro: ');

let primos = [];
let numero = 2;

while (primos.length < quantidade) {
  let ehPrimo = true;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }
  if (ehPrimo) {
    primos.push(numero);
  }
  numero++;
}

console.log(primos.join(', '));