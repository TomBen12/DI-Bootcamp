/* Create a function isObj tget a generic type and return type as a parameter (arg:T) return type {arg, is: true/fale} */

function isObj<T>(arg: T): { arg: T; is: boolean } {
  const isObject =
    typeof arg === "object" && !Array.isArray(arg) && arg != null;
  return { arg, is: isObject };
}


