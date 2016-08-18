var connectionFactory = require('../infra/connectionFactory.js');

module.exports = function(app) {
    app.get('/produtos', function(req,res){
        console.log("testando");
        var connection = connectionFactory();

        connection.query('select * from livros', function(err, results) {
            res.render('produtos/lista');
        });

        connection.end();
    });

    app.get('/tabela', function(req, res) {
        console.log("testando 02");
        var connection = connectionFactory();

        connection.query('select * from livros', function(err, results) {
            res.render('produtos/tabela-01/tabela');
        });

        connection.end();
    });
};
