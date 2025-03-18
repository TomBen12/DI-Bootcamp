const generateAutoIncrementId = (array) => {
  return array.length > 0 ? Math.max(...array.map((item) => item.id)) + 1 : 1;
};

module.exports = generateAutoIncrementId;
