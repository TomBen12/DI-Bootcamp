const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json("Home Page");
});

router.get("/about", (req, res) => {
  res.json("About Us Page");
});

module.exports = router;
