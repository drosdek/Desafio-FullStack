import Axios from "axios";

import config from "../config";
import Model from "../models/model";

class Repository {
  static async fetch() {
    const url = `${config.CONFIG_URL}/${this.endpoint}${this.query}`;

    return await Axios.get(url, {
      method: "get",
      timeout: 10000
    }).then(({ data }) => {
      if (Array.isArray(data)) {
        return data.map((item) => new this.model(item).toJSON());
      }
      throw "Erro com servidor!";
    });
  }

  static async fetchById(id) {
    const url = `${config.CONFIG_URL}/${this.endpoint}/${id}`;

    return await Axios.get(url, {
      method: "get",
      timeout: 10000
    }).then(({ data }) => {
      if (typeof data === "object") {
        return this.model.FromJSON(data);
      }
      throw "Erro com servidor!";
    });
  }

  static async create(data) {
    const url = `${config.CONFIG_URL}/${this.endpoint}/`;
    if (data) {
      const response = await Axios.post(url, data, { timeout: 1000 });
      if (typeof response.data === "object") {
        return new this.model(response.data).toJSON();
      }
      throw "Erro com servidor!";
    }
    throw "Parametro data nao e instancia do Model";
  }

  static async update(data) {
    const url = `${config.CONFIG_URL}/${this.endpoint}/${data._id}`;
    if (data) {
      const response = await Axios.put(url, data, {
        timeout: 10000
      });
      if (typeof response.data === "object") {
        return new this.model(response.data).toJSON();
      }
      throw "Erro com servidor!";
    }
    throw "Parametro data nao e instancia do Model";
  }

  static async remove(data) {
    const url = `${config.CONFIG_URL}/${this.endpoint}/${data._id}`;

    return await Axios.delete(url, {
      method: "delete",
      timeout: 10000
    });
  }
}

Repository.endpoint = "";
Repository.query = "";
Repository.model = Model;

export default Repository;
