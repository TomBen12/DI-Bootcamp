const apiKey = "c1a631c4900b5dcda43a92ea";
const baseUrl = "https://v6.exchangerate-api.com/v6";

async function requestCurrencyCodes() {
  try {
    const response = await fetch(`${baseUrl}/${apiKey}/codes`);
    if (!response.ok) {
      throw Error(
        `Status: ${response.status}, StatusText: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.supported_codes;
  } catch (error) {
    console.log(error.message);
  }
}
async function requestConvertCurrencies(from, to, amount) {
  try {
    const response = await fetch(
      `${baseUrl}/${apiKey}/pair/${from}/${to}/${amount}`
    );
    if (!response.ok) {
      throw Error(
        `Status: ${response.status}, StatusText: ${response.statusText}`
      );
    }
    const data = await response.json();
    return [data.conversion_result, data.target_code];
  } catch (error) {
    console.log(error.message);
  }
}

//Dom Extraction

const conversionForm = document.getElementById("converter-form");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

// display currencies
async function setCurrencies() {
  const optionArray = await requestCurrencyCodes();
  optionArray.forEach((currency) => {
    let optionString = `${currency[0]} - ${currency[1]}`;
    let fromOption = document.createElement("option");
    fromOption.value = currency[0];
    fromOption.innerText = optionString;
    fromCurrencySelect.appendChild(fromOption);
    let toOption = document.createElement("option");
    toOption.value = currency[0];
    toOption.innerText = optionString;
    toCurrencySelect.appendChild(toOption);
  });
}
// display conversion
async function convertAndDisplay() {
  const from = fromCurrencySelect.value;
  const to = toCurrencySelect.value;
  const amount = amountInput.value;
  const conversion = await requestConvertCurrencies(from, to, amount);
  result.innerText = `${conversion[0]}-${conversion[1]}`;
}

//Event litsners
document.addEventListener("DOMContentLoaded", () => {
  setCurrencies();
});

conversionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  convertAndDisplay();
});
