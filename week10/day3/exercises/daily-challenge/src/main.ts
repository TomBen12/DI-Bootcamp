/* Daily Challenge */

type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

type Item = User | Product | Order;

function handleData(data: Item[]): string[] {
  return data.map((item) => {
    switch (item.type) {
      case "user":
        return `hello ${item.name}! You are ${item.age}`;

      case "product":
        return `Product id: ${item.id}, price: $${item.price}`;

      case "order":
        return `Order #${item.orderId} - total: $${item.amount}`;

      default:
        return `Unknown item`;
    }
  });
}

const mixedData: Item[] = [
  { type: "user", name: "tom", age: 30 },
  { type: "product", id: 101, price: 19.99 },
  { type: "order", orderId: "345", amount: 50 },
];

const results = handleData(mixedData);
console.log(results.join("\n"));
