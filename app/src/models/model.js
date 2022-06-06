/* eslint-disable class-methods-use-this */
class Model {
  static FromJSON(json) {
    return new this(json);
  }

  toJSON() {
    return { ...this };
  }
}

export default Model;
