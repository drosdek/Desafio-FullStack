import Model from "./model";

class Desenvolvedor extends Model {
  constructor({
    id = undefined,
    nivel = null,
    nome = "",
    sexo = "",
    datanascimento = null,
    idade = undefined,
    hobby = ""
  } = {}) {
    super();
    this.id = id;
    this.nivel = nivel;
    this.nome = nome;
    this.sexo = sexo;
    this.datanascimento = datanascimento;
    this.idade = idade;
    this.hobby = hobby;
  }
}

export default Desenvolvedor;
