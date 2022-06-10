var express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
var config = require('config');
var morgan = require('morgan');

const errorHandler = require("./middleware/error-handler");


var indexRouter = require("./routes/index");
var niveisRouter = require("./routes/niveis");
var desenvolvedoresRouter = require("./routes/desenvolvedores");

var app = express();

//não mostra o log quando é teste
if(config.util.getEnv('NODE_ENV') !== 'test') {
   // usa o morgan para log na linha de comando
    app.use(morgan('combined')); //'combined' gera os LOGs do estilo Apache
}


// analisa application/json e procura por texto bruto
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));
app.use(cors());

app.use("/", indexRouter);
app.use("/niveis", niveisRouter);
app.use("/desenvolvedores", desenvolvedoresRouter);

// error handler
app.use(errorHandler);

module.exports = app;
