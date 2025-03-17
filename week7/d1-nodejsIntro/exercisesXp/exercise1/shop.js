const myProducts = require("./products");
// console.log(myProducts[0]);

const findProduct = (products, name) => {
  return products.find((product) => product.name === name);
};

const playstation = findProduct(myProducts, "playstation");
const iphone = findProduct(myProducts, "iphone");
const macBook = findProduct(myProducts, "macBook");

console.log(
  `the item ${playstation.name} is from the ${playstation.category} category and costs ${playstation.price}$`
);
console.log(
  `the item ${iphone.name} is from the ${iphone.category} category and costs ${iphone.price}$`
);
console.log(
  `the item ${macBook.name} is from the ${macBook.category} category and costs ${macBook.price}$`
);