import Model from "./model";

class Nivel extends Model {
  constructor({ _id = undefined, nivel = "" } = {}) {
    super();
    this._id = _id;
    this.nivel = nivel;
  }
}

export default Nivel;
