const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/bootstrap', express.static('public/css/bootstrap'));
app.use('/css', express.static('public/css'));

app.get('/', function(req, res){
    Post.findAll().then(function(posts){
        posts=posts.map((post)=>{return post.toJSON()});
        res.render('home', {posts: posts});
    });
});

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Esta postagem não existe");
    });
});

app.get('/alterar/:id', function(req, res){
    Post.findAll({where: {'id': req.params.id}}).then(function(posts){
        posts=posts.map((post)=>{return post.toJSON()});
        res.render('alterar', {posts: posts})
    });
});

app.post('/update', function(req, res){
    Post.update({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo},
        {where: {id: req.body.id}
    }).then(function(){
        res.redirect('/');
    }).catch(function(erro){
        res.send("Está postagem não existe"+erro);
    });
});

app.get('/cad', function(req, res){
    res.render('formulario');
});

app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('"Houve um erro: '+erro);
    });
});

app.listen(8081, function(){
    console.log("Servidor Rodando");
});