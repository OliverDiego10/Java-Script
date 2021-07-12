const novosAlunos = ["Rafael", "Douglas", "Daniel", "João"];

const darBoasVindas = (nomeAluno) => {
    console.log(`Seja bem vindo ${nomeAluno}`);
}

for (const aluno of novosAlunos) {
    darBoasVindas(aluno);
}

console.log('mensagem normal =', novosAlunos[0]);
console.log('mensagem concatenada com + ' + novosAlunos[0]);
console.log(`mensagem concatenada com template string ${novosAlunos[0]}`);