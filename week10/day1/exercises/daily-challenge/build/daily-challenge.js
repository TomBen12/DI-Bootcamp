"use strict";
// Daily Challenge
function validateUnionType(value, allowedTypes) {
    return allowedTypes.some((type) => {
        return typeof value === type;
    });
}
console.log(validateUnionType("TOM", ["string", "number"]));
console.log(validateUnionType(33, ["boolean"]));
