const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Version 1.90");
    res.send("Version 1.90");
})

module.exports = router;