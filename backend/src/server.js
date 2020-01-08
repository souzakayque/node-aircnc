const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

//mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-tjcsd.mongodb.net:27017,cluster0-shard-00-01-tjcsd.mongodb.net:27017,cluster0-shard-00-02-tjcsd.mongodb.net:27017/cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    mongoose.connect('mongodb+srv://admin:admin@cluster0-tjcsd.mongodb.net/cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


//req.query = Acessar query params(para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = acessar corpo da requisição (para criaçao, edição)


app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
