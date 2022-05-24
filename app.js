const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse appliaction/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse appliaction/json
app.use(bodyParser.json());

require('dotenv').config()

const port = process.env.PORT || 3000;

//  conexión a base de datos
const mongoose = require('mongoose');

const user = process.env.USER;
const password = process.env.PASSWORD;
const dbname = process.env.DBNAME;
const uri = `mongodb+srv://${user}:${password}@cluster0.afysi.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri).then(res =>{
  console.log(`base de datos conectada`);
});

//rutas WEB
app.use('/api', require('./src/routes/RutasWeb'));

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})