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

module.exports = router;
