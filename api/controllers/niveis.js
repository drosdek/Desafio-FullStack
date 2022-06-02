const niveisRepository = require("../repositories/niveis");

module.exports = {
  post,
  getAll,
  getById,
  update,
  delete: _delete,
};

function post(req, res, next) {
  niveisRepository
    .create(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  niveisRepository
    .getAll()
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
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  niveisRepository
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
