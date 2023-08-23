// importa o pacote express

const { response } = require('express');
const express = require('express');

//instancia o express na variavel app

const app = express();

// definir a porta do servidor
const PORT = 3004;


app.get('/api/teste',(request, response) => {
    response.send('diga, alto e claro');
})

//testar o servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`));