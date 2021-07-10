const listaPessoas = ["Douglas", "rafael", "Diego"];

const nome = process.argv[2];
const idade = process.argv[3];

if (! listaPessoas.includes(nome)) {
    console.log("voce não foi convidado!");
    return;
}
if (idade < 18) {
    console.log("Apenas maiores de idade podem entrar na festa!");
    return;
}
console.log("Seja bem vindo!"); //console é a classe, e o .log é o metodo

