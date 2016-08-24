module.exports = function(app) {
    app.get('/produtos', function(req,res){
        console.log("testando");
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function(erros, resultados) {
            res.render('produtos/lista');
        });

        connection.end();
    });





    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form');
    });
};
