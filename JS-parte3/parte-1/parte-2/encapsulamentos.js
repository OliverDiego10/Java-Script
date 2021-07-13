class Produto {
    #nome;
    #preco;
    #tipo;

    constructor(nome, preco) {
        this.#nome = nome;
        this.#preco = preco;
        this.#tipo = 'móvel';
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco * 0.75;
    }
}

const produto = new Produto("Monitor", 2500);
console.log(produto.nome, produto.preco);