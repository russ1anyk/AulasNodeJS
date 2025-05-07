const readline =  require('readline-sync');

const dados = readline.question('Nome, fone, e-mail: ').split(',')

console.log(dados);
console.log(typeof dados);