const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());


// Iniciando o DB
mongoose.connect('mongodb+srv://vinicius:imperva@cluster0-7pkoy.mongodb.net/skylab?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
require('./src/models/Product');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);