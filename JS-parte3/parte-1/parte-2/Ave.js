const Animal = require('./Animal');

class Ave extends Animal {
    constructor(nome, voa) {
        super(nome);
        this.voa = voa === true;
    }
}

module.exports = Ave;