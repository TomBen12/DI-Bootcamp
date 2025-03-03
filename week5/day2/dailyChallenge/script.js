let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

//ex1

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};
displayGroceries();

// ex2
//when assigning "betty "to client we already assigned the VALUE of client to user. string are a primitive type so they are passed by value
const cloneGroceries = () => {
  let user = client;
  client = "betty";

  const shopping = groceries;
  groceries.totalPrice = "35$";
  shopping.other.paid = false;
  //   console.log(user);
  console.log(shopping, groceries);
};
cloneGroceries();

//objects ar passed by refference which mean that when we assign a variable to an object we assign their memory adress which means that modifying one will modify the other
