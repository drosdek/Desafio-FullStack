const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nivel: { type: Schema.Types.ObjectId, ref: "Niveis" },
  nome: { type: String, required: true },
  sexo: { type: String },
  datanascimento: { type: Date },
  idade: { type: Number },
  hobby: { type: String },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Desenvolvedores", schema);
