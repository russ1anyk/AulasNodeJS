const readline = require('readline-sync');

const num = readline.question('Digite a quantidade de números da série de Fibonacci que deseja ver: ');

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < num; i++) {
  let temp = a + b;
  a = b;
  b = temp;
  console.log(b);
  if (i === 2) {
    console.log('Número Áureo (phi): 1,618');
  }
}