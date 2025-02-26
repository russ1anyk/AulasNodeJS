//Atividade IMC

const readline = require('readline-sync');
const peso = Number(readline.question('Seu peso? '));
const altura = Number(readline.question('Sua altura? '));

if (!(!isNaN(peso) && !isNaN(altura))){
    console.log('Peso ou altura incompatível!');
} else {
    const imc = peso / (altura*altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
} 