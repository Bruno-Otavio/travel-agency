const express = require("express");

const router = express.Router();

const verify_connection = (req, res) => {
    res.send("Working Fine");
}

router.get("/", verify_connection);

module.exports = router;
