const readline = require("readline-sync");

const input = readline.question("Digite um número inteiro: ").trim();
const num = Number(input);

isNaN(num) || !Number.isInteger(num) ? console.log("Entrada inválida! Por favor, digite um número inteiro."): console.log(num % 2 === 0 ? "O número é par" : "O número é ímpar");   
