const express = require('express')
const server = express();

const mgs = require('./data.json');

server.get('/', (request, response) => {
    return response.json({mensagem: 'Minha API está funcionando e agora atualizando'})
});

server.get('/user', (request, response) => {
    return response.json({user: 'metaullica'})
});

server.get('/mgsgames', (request, response) => {
    return response.json(mgs)
});

server.listen(8080, () => {
    console.log('Servidor está funcionando...')
});