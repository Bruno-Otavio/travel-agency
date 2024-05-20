const express = require("express");

const router = express.Router();

const destinos = require("./controller/destinos");

const verify_connection = (req, res) => {
    res.send("Working Fine");
}

router.get("/", verify_connection);

router.get("/destinos", destinos.getAll);

module.exports = router;
