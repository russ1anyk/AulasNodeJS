const readline = require('readline-sync');

const num = readline.question('Digite um número inteiro positivo: ');

let fatorial = 1;

if (num === 0 || num === 1) {
  console.log(`O fatorial de ${num} é igual a 1`);
} else {
  for (let i = 2; i <= num; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${num} é igual a ${fatorial}`);
}