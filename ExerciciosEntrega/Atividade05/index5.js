const readline = require('readline-sync');
const ch = '█';

const texto = readline.question('Digite o texto que deseja exibir: ');
const tamanhoTexto = texto.length;
const tamanhoMoldura = tamanhoTexto + 4;

process.stdout.write(ch.repeat(tamanhoMoldura) + '\n');
process.stdout.write(`${ch} ${texto} ${ch}\n`);
process.stdout.write(ch.repeat(tamanhoMoldura) + '\n');