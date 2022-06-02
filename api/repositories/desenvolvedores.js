const config = require("../config.json");
const db = require("../_helpers/db");

const Desenvolvedores = db.Desenvolvedores;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await Desenvolvedores.find();
}

async function getById(id) {
  return await Desenvolvedores.findById(id);
}

async function create(devParam) {
  // validação
  if (await Desenvolvedores.findOne({ nome: devParam.nome })) {
    throw 'Desenvolvedor com nome "' + devParam.nome + '" ja está cadastrado!';
  }

  const desenvolvedor = new Desenvolvedores(devParam);

  // salvar desenvolvedor
  await desenvolvedor.save();

  return desenvolvedor
}

async function update(id, devParam) {
  const desenvolvedor = await Desenvolvedores.findById(id);

  // validação
  if (!desenvolvedor) throw "Desenvolvedor não encontrado!";
  if (
    desenvolvedor.nome !== devParam.nome &&
    (await Desenvolvedores.findOne({ nome: devParam.nome }))
  ) {
    throw 'Desenvolvedor com nome "' + devParam.nome + '" já está cadastrado!';
  }

  // copia da propriedade devParam para desenvolvedor
  Object.assign(desenvolvedor, devParam);

  await desenvolvedor.save();

  return desenvolvedor
}

async function _delete(id) {
  await Desenvolvedores.findByIdAndRemove(id);
}