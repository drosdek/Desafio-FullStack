const db = require("../middleware/db");

const Desenvolvedores = db.Desenvolvedores;

module.exports = {
  getAll,
  getById,
  create,
  update,
  findOneByNivel,
  delete: _delete,
};

async function getAll(query) {
  if (query.nome) {
    return await Desenvolvedores.findOne({ nome: query.nome });
  }
  return await Desenvolvedores.find(query);
}

async function getById(id) {
  return await Desenvolvedores.findById(id);
}

async function findOneByNivel(id) {
  return await Desenvolvedores.findOne({ nivel: id });
}

async function create(devParam) {
  // Verifica se ja tem o desenvolvedor cadastrado com mesmo nome
  if (await Desenvolvedores.findOne({ nome: devParam.nome })) {
    throw 'Desenvolvedor com nome "' + devParam.nome + '" ja está cadastrado!';
  }

  const desenvolvedor = new Desenvolvedores(devParam);

  // salvar desenvolvedor
  await desenvolvedor.save();

  return desenvolvedor;
}

async function update(id, devParam) {
  const desenvolvedor = await Desenvolvedores.findById(id);

  // verifica se encontrou desenvolvedor
  if (!desenvolvedor) throw "Desenvolvedor não encontrado!";

  // Verifica se ja tem o desenvolvedor cadastrado com mesmo nome
  if (
    desenvolvedor.nome !== devParam.nome &&
    (await Desenvolvedores.findOne({ nome: devParam.nome }))
  ) {
    throw 'Desenvolvedor com nome "' + devParam.nome + '" já está cadastrado!';
  }

  // copia da propriedade devParam para desenvolvedor
  Object.assign(desenvolvedor, devParam);

  await desenvolvedor.save();

  return desenvolvedor;
}

async function _delete(id) {
  let uid = await Desenvolvedores.findById(id);
  //verifica se possui desenvolvedor com a id para remover
  if (!uid) throw "Desenvolvedor não encontrado!";
  
  await Desenvolvedores.findByIdAndRemove(id);
}
