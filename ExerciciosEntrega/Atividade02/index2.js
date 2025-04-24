const readline = require('readline-sync');

const login = 'admin';
const senha = '123';
const maxTentativas = 3;

let input = readline.question('Insira o seu login: ');

if (input === login) {
    for (let i = 0; i < maxTentativas; i++) {
        input = readline.question('Insira a sua senha: ');
        if (input === senha) {
            console.log('Bem Vindo!!!');
            break;
        } else {
            console.log(`Senha incorreta! Você tem ${maxTentativas - i - 1} tentativas restantes.`);
        }
    }
    if (input !== senha) {
        console.log('Número máximo de tentativas alcançado!');
        process.exit();
    }
} else {
    console.log('Login inválido!');
    process.exit();
}