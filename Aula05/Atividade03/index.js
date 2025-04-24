//  let i;
//  for (i = -1; i <= 11; i+=3) {
//    console.log(i); 
//  }

const readline = require('readline-sync');

const num = Number(readline.question('Digite um n°: '));

let i = 0;

while (i < 11) {
console.log(`${num} x ${i} = ${num * i}`);  
}