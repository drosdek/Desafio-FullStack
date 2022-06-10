const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const desenvolvedorSchema = new Schema({
  nivel: { type: Schema.Types.ObjectId, ref: "Niveis", required: true },
  nome: { type: String, required: true },
  sexo: { type: String },
  datanascimento: { type: Date },
  idade: { type: Number },
  hobby: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Define o parâmetro createdAt igual à hora atual
desenvolvedorSchema.pre("save", (next) => {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

desenvolvedorSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret.id;
  },
});

module.exports = mongoose.model("desenvolvedores", desenvolvedorSchema);
