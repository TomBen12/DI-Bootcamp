const { Router } = require("express");

const { getAll } = require("../controllers/products.js");

const router = Router();

router.get("/", getAll);

module.exports = router;
