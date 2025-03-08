function allTruthy() {
  const argsArray = [...arguments];
  return argsArray.every((arg) => Boolean(arg));
}
