var express = require("express");
var router = express.Router();
var desenvolvedores = require("../controllers/desenvolvedores");

// routes
router.get("/", desenvolvedores.getAll);
router.get("/:id", desenvolvedores.getById);
router.post("/", desenvolvedores.create);
router.put("/:id", desenvolvedores.update);
router.delete("/:id", desenvolvedores.delete);

module.exports = router;
