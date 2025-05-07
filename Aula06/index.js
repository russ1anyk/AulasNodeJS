const rl = require('readline-sync');

const usuarios = [];

console.log('----- SEJA BEM VINDO A AGENDA -----');

while (true) {
    const user = rl.question('\nInsira seu nome: ');
    const num = rl.question('\nInsira seu número: ');
    const est = rl.question('\nInsira seu estado: ');

    const users = {
        user,
        num,
        est
    };

    usuarios.push(users);

    const continuar = rl.question('Deseja cadastrar mais alguém?(s/n): ');
    if (continuar.toLowerCase() !== 's'){
        break;
    }
}

console.log('------- PESSOAS CADASTRADAS ------- ');
console.log('\n', usuarios);