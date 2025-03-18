const generateAutoIncrementId = (array) => {
  return array.length > 0 ? Math.max(...array.map((item) => item.id)) + 1 : 1;
  //if array is empty return one else return array of item.id and spread it ,
  // max() return the biggest of them, add one . that will be the id
};

export { generateAutoIncrementId };
