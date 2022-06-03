var express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const errorHandler = require("./middleware/error-handler");


var indexRouter = require("./routes/index");
var niveisRouter = require("./routes/niveis");
var desenvolvedoresRouter = require("./routes/desenvolvedores");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/niveis", niveisRouter);
app.use("/desenvolvedores", desenvolvedoresRouter);

// error handler
app.use(errorHandler);

module.exports = app;
