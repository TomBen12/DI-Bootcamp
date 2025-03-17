import { greet, hello } from "./utils/greeting.cjs";
import {
  dispalyColorMessage,
  dispalyErrorMessage,
} from "./colorful-message.js";
import { read_file } from "./read-file.js";

// console.log(greet('Amazing studets of web 156'));

// console.log(hello());

// console.log(dispalyColorMessage(greet("Tom")));
// console.log(dispalyErrorMessage(greet("Opps... somthing went wrong")));

try {
  const data = await read_file("./files/file-data.tx");
  console.log(dispalyColorMessage(data));
} catch (error) {
  console.log(dispalyErrorMessage(error.message));
}
