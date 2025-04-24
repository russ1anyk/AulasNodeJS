const readline = require("readline-sync");

while (true) {
  let input = readline.question("Digite um número: ");
  let numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Número inválido.");
  } else {
    console.log(`O número ${numero} é ${numero % 2 === 0 ? "PAR" : "ÍMPAR"}.`);
  }

  let continuar = readline.question("Deseja continuar? (S/N): ");
  if (continuar.toLowerCase() !== "s") {
    console.log("Programa encerrado.");
    break;
  }
}
