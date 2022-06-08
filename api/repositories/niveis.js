const config = require("../config.json");
const db = require("../middleware/db");
const desenvolvedoresRepository = require("./desenvolvedores");

const Niveis = db.Niveis;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll(query) {
  if (query.nivel) {
    return await Niveis.findOne({ nivel: query.nivel });
  }
  return await Niveis.find(query);
}

async function getById(id) {
  return await Niveis.findById(id);
}

async function create(nivelParam) {
  // validação
  if (await Niveis.findOne({ nivel: nivelParam.nivel })) {
    throw 'Nivel com nome "' + nivelParam.nivel + '" já está cadastrado!';
  }

  const nivel = new Niveis(nivelParam);

  // salvar nivel
  await nivel.save();

  return nivel;
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

  return nivel;
}

async function _delete(id) {
  let uid = await Niveis.findById(id);
  let desenvolvedor = await desenvolvedoresRepository.findOneByNivel(id);
  if (!uid) throw "Nivel não encontrado!";
  if (desenvolvedor) {
    return "RemoveError";
  } else {
    return await Niveis.findByIdAndRemove(id);
  }
}
