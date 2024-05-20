const express = require("express");

const router = express.Router();

const destinos = require("./controller/destinos");
const pontos = require("./controller/pontos");
const hoteis = require("./controller/hoteis");

const verify_connection = (req, res) => {
    res.send("Working Fine");
}

router.get("/", verify_connection);

router.get("/destinos", destinos.getAll);
router.get("/destinos/:id", destinos.get);
router.post("/destinos", destinos.create);
router.put("/destinos", destinos.update);
router.delete("/destinos/:id", destinos.del);

router.get("/pontos", pontos.getAll);
router.get("/pontos/:id", pontos.get);
router.post("/pontos", pontos.create);
router.put("/pontos", pontos.update);
router.delete("/pontos/:id", pontos.del);

router.get("/hoteis", hoteis.getAll);
router.get("/hoteis/:id", hoteis.get);
router.post("/hoteis", hoteis.create);
router.put("/hoteis/:id", hoteis.update);
router.delete("/hoteis/:id", hoteis.delete);

module.exports = router;
