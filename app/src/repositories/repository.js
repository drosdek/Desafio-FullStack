import Axios from "axios";

import config from "../config";
import Model from "../models/model";

class Repository {
  static get() {
    const url = `${config.CONFIG_URL}/${this.endpoint}${this.query}`;

    return Axios.get(url, {
      method: "get",
      timeout: 10000
    }).then(({ data }) => {
      if (Array.isArray(data)) {
        return data.map(this.model.FromJSON);
      }
      throw "Erro com servidor!";
    });
  }

  static getById(id) {
    const url = `${config.CONFIG_URL}/${this.endpoint}/${id}`;

    return Axios.get(url, {
      method: "get",
      timeout: 10000
    }).then(({ data }) => {
      if (Array.isArray(data)) {
        return data.map(this.model.FromJSON);
      }
      throw "Erro com servidor!";
    });
  }

  static create(data) {
    const url = `${config.CONFIG_URL}/${this.endpoint}/`;
    if (data instanceof Model) {
      return Axios.post(url, {
        method: "post",
        timeout: 10000,
        data: data.toJSON()
      }).then(({ data }) => {
        if (Array.isArray(data)) {
          return data.map(this.model.FromJSON);
        }
        throw "Erro com servidor!";
      });
    }
    throw "Parametro data nao e instancia do Model";
  }

  static update(data) {
    const url = `${config.CONFIG_URL}/${this.endpoint}/`;
    if (data instanceof Model) {
      return Axios.put(url, {
        method: "put",
        timeout: 10000,
        data: data.toJSON()
      }).then(({ data }) => {
        if (Array.isArray(data)) {
          return data.map(this.model.FromJSON);
        }
        throw "Erro com servidor!";
      });
    }
    throw "Parametro data nao e instancia do Model";
  }

  static remove(id) {
    const url = `${config.CONFIG_URL}/${this.endpoint}/${id}`;

    return Axios.delete(url, {
      method: "delete",
      timeout: 10000
    }).then(({ data }) => {
      if (Array.isArray(data)) {
        return data.map(this.model.FromJSON);
      }
      throw "Erro com servidor!";
    });
  }
}

Repository.endpoint = "";
Repository.query = "";
Repository.model = Model;
