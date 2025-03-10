// initial:
function isAnaram(first, second) {
  let firstStrArr = first
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let secondStrArr = second
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return firstStrArr === secondStrArr;
}

// less repetitive aproach while using unpacking as well so i dont need to use the split method :
function isAnag(first, second) {
  const translate = (str) =>
    [...str.replace(/\s/g, "").toLowerCase()].sort().join("");

  return translate(first) === translate(second);
}
