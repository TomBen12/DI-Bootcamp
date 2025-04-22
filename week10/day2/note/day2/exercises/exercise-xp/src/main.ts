//Exercise 1
class Employee {
  private name: string;
  private salary: number;
  position: string;
  protected department: string;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string
  ) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  getEmployeeInfo(): object {
    return { name: this.name, position: this.position };
  }
}
const emp1 = new Employee("Tom", 100000, "FullStack", "Dev");

console.log(emp1.getEmployeeInfo());

//Exercise 2

class Product {
  readonly id: number;
  name: string;
  price: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `name: ${this.name} - price: ${this.price}`;
  }
}

const aProduct = new Product(123, "phone", 400);
// aProduct.id = 2
//readonly properties can be read only...

//Exercise 3
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): string {
    return "waffchirpMoomew!!";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): string {
    return "WAFF!";
  }
}

const anAnimal = new Animal("asd");
const dog1 = new Dog("Lucy");

console.log(anAnimal.makeSound());
console.log(dog1.makeSound());

//exercise 4

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

let res1 = Calculator.add(1, 1);
let res2 = Calculator.subtract(5, 2);

console.log(res1, res2);

//Exercise 5

interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Membership Level: ${user.membershipLevel}`);
}

const user1: PremiumUser = {
  id: 101,
  name: "Tom",
  email: "tom@dfghj.com",
  membershipLevel: "gold",
};

printUserDetails(user1);
