const readline = require('readline-sync');


while (true) {

    let num1 = parseInt(readline.question('Digite a base: '));
    let num2 = parseInt(readline.question('Digite o expoente: '));

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Isso não é um número ou não é inteiro!');
    } else {
        let result = num1 ** num2;
        console.log(`${num1} elevado a ${num2} = ${result}`);
    }

    let continuar = readline.question('Deseja continuar? (S/N): ');
    if (continuar.toLowerCase() !== 's') {
        console.log('Programa encerrado.');
        
        break;
    }
}