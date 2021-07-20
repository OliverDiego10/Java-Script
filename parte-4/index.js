// configurar o nosso express
// criar o controller para receber requisicão
// devolver para o usuário os dados dele via JSON
// swagger 

const App = require('./src/App');

const api = new App();
api.start();