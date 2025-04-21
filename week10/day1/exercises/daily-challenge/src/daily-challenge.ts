// Daily Challenge

function validateUnionType(value: any, allowedTypes: string[]): boolean {
  return allowedTypes.some((type: string) => {
    return typeof value === type;
  });
}

console.log(validateUnionType("TOM", ["string", "number"]));

console.log(validateUnionType(33, ["boolean"]));
