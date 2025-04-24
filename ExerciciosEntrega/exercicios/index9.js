const readline = require('readline-sync');

const num = readline.question('Digite um número inteiro maior que 1: ');

if (num <= 1) {
  console.log('Número inválido. Por favor, digite um número inteiro maior que 1.');
} else {
  let ehPrimo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      ehPrimo = false;
      break;
    }
  }
  if (ehPrimo) {
    console.log(`O número ${num} é primo.`);
  } else {
    console.log(`O número ${num} não é primo.`);
  }
}