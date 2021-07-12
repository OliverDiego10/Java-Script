const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosMercado = [
    "feijão",
    "arroz",
    "melancia",
    "suco",
    "alface"
];

const validarLista = (listaMercado) => {
    // verifica se a lista esta vazia "", ou esta false, se esta null, se esta undefined
    if (!listaMercado) {
        throw Error("A lista não pode ser vazia!");
    }
    
    const itensDesejados = listaMercado.split(",");
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;

    if (itensInvalidos > 0) {
        throw Error(`Existem ${itensInvalidos} itens inválidos`);
    }

    return itensDesejados;
}

const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();

        if (produtosMercado.includes(itemFormatado)) {
            produtosDisponiveis.push(itemFormatado);
        } else {
            produtosIndisponiveis.push(itemFormatado);
        }
    }

    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
}

leitor
    .question(
        "Digite a lista de produtos separados por virgula:\n",
        listaProdutos => {
            try {
                const listaValida = validarLista(listaProdutos);
                const disponibilidade = obterDisponibilidade(listaValida);
                
                console.log(
                    'Os seguintes produtos estão disponíveis',
                    disponibilidade.produtosDisponiveis
                );

                console.log(
                    'Os seguintes produtos estão indisponíveis',
                    disponibilidade.produtosIndisponiveis
                );

                const disponiveisOrdenados = disponibilidade
                    .produtosDisponiveis
                    .sort((produto1, produto2) => produto1.localeCompare(produto2));
                
                console.log(
                    'Produtos disponíveis ordenados alfabeticamente',
                    disponiveisOrdenados
                );
            } catch (e) {
                console.log(`Erro ao processar a lista (${e.message})`);
            } finally {
                leitor.close();
            }
        }
    );