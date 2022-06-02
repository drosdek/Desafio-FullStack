const config = require("../config.json");
const db = require("../_helpers/db");

const Niveis = db.Niveis;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await Niveis.find();
}

async function getById(id) {
  return await Niveis.findById(id);
}

async function create(nivelParam) {
  // validação
  if (await Niveis.findOne({ nome: nivelParam.nome })) {
    throw 'Nivel com nome "' + nivelParam.nome + '" já está cadastrado!';
  }

  const nivel = new Niveis(nivelParam);

  // salvar nivel
  await nivel.save();
}

async function update(id, nivelParam) {
  const nivel = await Niveis.findById(id);

  // validação
  if (!nivel) throw "Nivel não encontrado!";
  if (
    nivel.nome !== nivelParam.nome &&
    (await Niveis.findOne({ nome: nivelParam.nome }))
  ) {
    throw 'Nivel com nome "' + nivelParam.nome + '" já está cadastrado!';
  }

  // copia da propriedade nivelParam para nivel
  Object.assign(nivel, nivelParam);

  await nivel.save();
}

async function _delete(id) {
  await Niveis.findByIdAndRemove(id);
}
