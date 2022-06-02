const desenvolvedoresRepository = require("../repositories/desenvolvedores");

module.exports = {
  create,
  getAll,
  getById,
  update,
  delete: _delete,
};

function create(req, res, next) {
  desenvolvedoresRepository
    .create(req.body)
    .then((desenvolvedor) => res.json(desenvolvedor))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  desenvolvedoresRepository
    .getAll()
    .then((desenvolvedores) => res.json(desenvolvedores))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  desenvolvedoresRepository
    .getById(req.params.id)
    .then((desenvolvedor) => (desenvolvedor ? res.json(desenvolvedor) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function update(req, res, next) {
  desenvolvedoresRepository
    .update(req.params.id, req.body)
    .then((desenvolvedor) => res.json(desenvolvedor))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  desenvolvedoresRepository
    .delete(req.params.id)
    .then((desenvolvedor) => res.json(desenvolvedor))
    .catch((err) => next(err));
}
