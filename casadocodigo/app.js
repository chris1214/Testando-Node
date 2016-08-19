var app = require('./config/express')();
console.log("teste3");
app.listen(3000,function(){
  console.log("servidor rodando");
});
