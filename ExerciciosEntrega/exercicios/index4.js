const readline = require('readline-sync');

let x = readline.question('Digite um valor inicial positivo: ');
let vezes = readline.question('Digite quantas vezes deseja calcular o número de Euler: ');

for (let i = 0; i < vezes; i++) {
  let e = Math.pow((1 + 1/x), x);
  console.log(`O número de Euler (e) para x = ${x} é aproximadamente: ${e.toFixed(2)}`);
  x++;
}

console.log('Processo concluído!');