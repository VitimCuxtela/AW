const express = require ('express');
const app = express();

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});

//Criador a rota raiz
app.get("/", function(req, res){
    res.send("Pagina principal!");
});

app.get("/sobre", function(req, res){
    res.send("Pagina sobre");
});

app.get('/saudacao/:nome', function(req, res){
    res.send(req.params);
});

app.get('/saudacao/:nome/:email', function(req, res){
    res.send("<h3>Olá" + req.params.nome + " </h3><hr> <h4>E-mail" + req.params.nome + "</h4>");
});