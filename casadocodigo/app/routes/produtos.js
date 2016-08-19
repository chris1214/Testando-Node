
module.exports = function(app) {
    app.get('/produtos', function(req,res){
        console.log("testando");
        var connection = app.infra.connectionFactory();

        connection.query('select * from livros', function(erros, resultados) {
            res.render('produtos/lista');
        });

        connection.end();
    });

    app.get('/tabela', function(req, res) {
        console.log("testando 02");
        var connection = app.infra.connectionFactory();

        connection.query('select * from livros', function(erros, resultados) {
            res.render('produtos/tabela-01/tabela');
        });

        connection.end();
    });
};
