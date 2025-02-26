const readline = require('readline-sync');
const idade = Number(readline.question('Qual sua idade? '));

const result =(idade >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(result);