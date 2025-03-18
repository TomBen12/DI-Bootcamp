const { products } = require("../config/data.js");

const getAll = (req, res) => {
  res.json(products);
};

module.exports = {
  getAll,
};
