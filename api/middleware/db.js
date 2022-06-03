const config = require("../config.json");
const mongoose = require("mongoose");
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(
  process.env.MONGODB_URI || config.connectionString,
  connectionOptions
);
mongoose.Promise = global.Promise;

module.exports = {
  Niveis: require("../models/niveis"),
  Desenvolvedores: require("../models/desenvolvedores"),
};
