const express = require('express');
const bodyParser = require('body-parser');

module.exports = function() {
    const app = express();
    app.use(bodyParser.json());

    const rotas = require('../app/rotas/rotas');
    rotas(app);

    return app;
}
