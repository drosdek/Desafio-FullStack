import Model from "./model";

class Desenvolvedor extends Model {
  constructor({
    _id = undefined,
    nivel = "",
    nome = "",
    sexo = "",
    datanascimento = null,
    idade = undefined,
    hobby = ""
  } = {}) {
    super();
    this._id = _id;
    this.nivel = nivel;
    this.nome = nome;
    this.sexo = sexo;
    this.datanascimento = datanascimento;
    this.idade = idade;
    this.hobby = hobby;
  }
}

export default Desenvolvedor;
