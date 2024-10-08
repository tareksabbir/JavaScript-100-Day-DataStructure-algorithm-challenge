//idea:Example of And Operator
// In this example, the '&&' operator checks whether the left-side value is truthy; if it is, the operator returns the value on the right side. Alternatively, if the left-side value is falsy, the operator returns the value on the left side.

const lang = "LearnWithSumit";
const result1 = lang && "JavaScript";

console.log(result1); //JavaScript

const lang2 = false;
const result2 = lang2 && "JavaScript";

console.log(result2); //false

//idea: Example of Or Operator
// In this example, the '||' (logical OR) operator is utilized to determine the values assigned to the variables 'result1' and 'result2' based on the truthiness of the variables 'lang' and 'lang2', respectively.

const result4 = lang || "JavaScript";
console.log(result4); // LearnWithSumit

// In the first part of the code, 'result1' is assigned the value of 'lang' because the '||' operator checks if 'lang' is truthy. In this case, since 'lang' is a non-empty string (truthy), the operator returns the left operand ('lang'), resulting in 'result1' being set to "LearnWithSumit."

const result5 = lang || "JavaScript";

console.log(result5); // JavaScript

// Moving on to the second part, 'result2' is assigned the value of "JavaScript" because 'lang2' is falsy (specifically, it is the boolean value 'false'). The '||' operator returns the right operand when the left operand is falsy, leading to 'result2' being set to "JavaScript."

//idea:Example of Nullish Coalescing Operator
// In this example, the '??' (nullish coalescing) operator is employed to determine the values assigned to the variables 'result1' and 'result2' based on the presence of a 

const result6 = lang ?? "JavaScript";
console.log(result6); // LearnWithSumit

// In the first part of the code, 'result1' is assigned the value of 'lang' because the '??' operator checks if 'lang' is not nullish. Since 'lang' is a non-nullish string ("LearnWithSumit"), the operator returns the left operand ('lang'), resulting in 'result1' being set to "LearnWithSumit."

const lang7 = false;
const result7 = lang7 ?? "JavaScript";

console.log(result2); // false

// In the second part, 'result2' is assigned the value of 'lang2' because the '??' operator checks if 'lang2' is not nullish. Although 'lang2' is falsy, it is not nullish, so the operator returns the left operand ('lang2'), resulting in 'result2' being set to 'false'.