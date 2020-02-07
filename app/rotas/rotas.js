const { check, validationResult } = require('express-validator');

module.exports = function(app) {

    app.get('/cartoes', function(req, res) {
        res.send('OK');
    });

    app.post('/cartoes/autoriza', [
        check("numero", "Número é obrigatório e deve ter 16 caracteres.").notEmpty().isLength({ min: 16, max: 16}),
        check("bandeira", "Bandeira do cartão é obrigatória.").notEmpty(),
        check("ano_de_expiracao", "Ano de expiração é obrigatório e deve ter 4 caracteres.").notEmpty().isLength({ min: 4, max: 4 }),
        check("mes_de_expiracao", "Mês de expiração é obrigatório e deve ter 2 caracteres").notEmpty().isLength({ min: 2, max: 2 }),
        check("cvv", "CVV é obrigatório e deve ter 3 caracteres").notEmpty().isLength({ min: 3, max: 3 })
    ], function(req, res) {
        console.log("Processando cartão de crédito");

        var errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Erros de validação de C/C");
            console.log(errors.errors);
            res.status(400).send(errors);
            return;
        }

        var cartao = req.body;
        cartao.status = 'AUTORIZADO';

        var response = {
            dados_do_cartao: cartao
        };

        res.status(201).json(response);
        console.log("Validação OK");
        return;

    });
}