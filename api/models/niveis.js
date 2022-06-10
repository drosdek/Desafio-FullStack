const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const niveisSchema = new Schema({
  nivel: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Define o parâmetro createdAt igual à hora atual
niveisSchema .pre("save", (next) => {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

niveisSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret.id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("niveis", niveisSchema);
