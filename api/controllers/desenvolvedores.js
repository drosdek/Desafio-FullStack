const desenvolvedoresRepository = require("../repositories/desenvolvedores");

module.exports = {
  create,
  getAll,
  getById,
  update,
  delete: _delete,
};

function create(req, res, next) {
  const data = req.body;
  if (!data.idade) {
    data.idade =
      new Date().getFullYear() - new Date(data.datanascimento).getFullYear();
  }
  desenvolvedoresRepository
    .create(data)
    .then((desenvolvedor) => res.status(201).json(desenvolvedor))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  desenvolvedoresRepository
    .getAll(req.query)
    .then((desenvolvedores) =>
      desenvolvedores === null || desenvolvedores === []
        ? res.sendStatus(404)
        : res.json(desenvolvedores)
    )
    .catch((err) => next(err));
}

function getById(req, res, next) {
  desenvolvedoresRepository
    .getById(req.params.id)
    .then((desenvolvedor) =>
      desenvolvedor ? res.json(desenvolvedor) : res.sendStatus(404)
    )
    .catch((err) => next(err));
}

function update(req, res, next) {
  const data = req.body;
  if (!data.idade) {
    data.idade =
      new Date().getFullYear() - new Date(data.datanascimento).getFullYear();
  }
  desenvolvedoresRepository
    .update(req.params.id, data)
    .then((desenvolvedor) => res.json(desenvolvedor))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  desenvolvedoresRepository
    .delete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch((err) => next(err));
}
