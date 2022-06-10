const config = require("config");
const mongoose = require("mongoose");
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://${config.username}:${config.password}@${config.cluste}.oy1dper.mongodb.net/${config.dbname}?retryWrites=true&w=majority`,
  connectionOptions
);
mongoose.Promise = global.Promise;

module.exports = {
  Niveis: require("../models/niveis"),
  Desenvolvedores: require("../models/desenvolvedores"),
};
