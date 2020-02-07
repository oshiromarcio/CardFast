const CustomExpress = require('./config/custom-express');
const app = CustomExpress();
const port = 3002;

app.listen(port, function() {
    console.log("Servidor de Cartão de Crédito rodando na porta " + port);
});
