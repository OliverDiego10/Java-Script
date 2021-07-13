// importa o modulo readline
const readline = require('readline');
// importa a classe produto
const Produto = require('./Produto');

// cria a interface para fazer leitura e escrita do terminal
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// define o array de objetos da classe Produto, disponiveis do mercado
const produtosMercado = [
    new Produto("feijão", 5), // cria objeto/instância
    new Produto("arroz", 10.50), // cria objeto
    new Produto("melancia", 2),
    new Produto("suco", 10),
    new Produto("alface", 3)
];

// valida a lista recebida pelo usuario e retorna a lista valida
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

// faz a separacao entre produtos disponiveis e indisponiveis no mercado
const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();
        const produto = produtosMercado
            .find(produtoMercado => produtoMercado.nome === itemFormatado);

        if (produto) {
            produtosDisponiveis.push(produto);
        } else {
            produtosIndisponiveis.push(itemFormatado);
        }
    }

    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
}

const processarResposta = listaProdutos => {
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
            .sort((produto1, produto2) => 
                produto1.nome.localeCompare(produto2.nome)
            );
        
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

leitor
    .question(
        "Digite a lista de produtos separados por virgula:\n",
        processarResposta
    );