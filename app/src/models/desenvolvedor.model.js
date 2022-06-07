import Model from "./model";

class Desenvolvedor extends Model {
  constructor({
    _id = undefined,
    nivel = null,
    nome = "",
    sexo = "",
    datanascimento = null,
    idade = null,
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
