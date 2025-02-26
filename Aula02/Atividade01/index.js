const readline = require ('readline-sync');

const idade = Number(readline.question('Qual sua idade? '));

if (!isNaN(idade)){
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}
} else {
    console.log('Oops, isso não é um número!');
}
