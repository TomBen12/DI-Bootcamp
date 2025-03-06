const person = { first: "Tom", last: "Cruise" };

function printFullName({ first, last }) {
  console.log(`the full name is ${first} ${last}`);
}

printFullName(person);

//exercise 2

const someObj = { a: "Apple", b: "Microsoft", c: "Google" };

function separateKeyVal(object) {
  const keys = Object.keys(object).sort();
  const values = keys.map((key) => object[key]);
  return [keys, values];
}

//exercise 3

//the counter will be 3 because we don't create a new object only reffering to the first.
