import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const a = Number(e.target.first.value);
    const b = Number(e.target.second.value);
    const op = e.target.operation.value;

    let res;
    switch (op) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "no division";
        break;
    }

    setResult(res);
  };

  return (
    <form onSubmit={calculate}>
      <input name="first" type="number" placeholder="First number" />
      <select name="operation">
        <option value="+">➕</option>
        <option value="-">➖</option>
        <option value="*">✖️</option>
        <option value="/">➗</option>
      </select>
      <input name="second" type="number" placeholder="Second number" />
      <button>Calculate</button>

      {result !== null && <p>Result: {result}</p>}
    </form>
  );
};

export default Calculator;
