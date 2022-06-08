const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nivel: { type: String, unique: true, required: true },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret.id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("Niveis", schema);
