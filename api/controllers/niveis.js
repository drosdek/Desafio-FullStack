const niveisRepository = require("../repositories/niveis");

module.exports = {
  create,
  getAll,
  getById,
  update,
  delete: _delete,
};

function create(req, res, next) {
  niveisRepository
    .create(req.body)
    .then((niveis) => res.status(201).res.json(niveis))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  niveisRepository
    .getAll(req.query)
    .then((niveis) => res.json(niveis))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  niveisRepository
    .getById(req.params.id)
    .then((nivel) => (nivel ? res.json(nivel) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function update(req, res, next) {
  niveisRepository
    .update(req.params.id, req.body)
    .then((niveis) => res.json(niveis))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  niveisRepository
    .delete(req.params.id, res)
    .then((nivel) => (nivel === 'RemoveError' ? res.sendStatus(501) : res.sendStatus(204)))
    .catch((err) => next(err));
}
