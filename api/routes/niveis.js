var express = require("express");
var router = express.Router();
var niveis = require("../controllers/niveis");

// routes
router.get("/", niveis.getAll);
router.get("/:id", niveis.getById);
router.post("/", niveis.create);
router.put("/:id", niveis.update);
router.delete("/:id", niveis.delete);

module.exports = router;
