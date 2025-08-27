// Math Operations Module

// Addition
const add = (a, b) => a + b;

// Subtraction
const sub = (a, b) => a - b;

// Multiplication
const multiply = (a, b) => a * b;

// Division
const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

// Modulo
const modulo = (a, b) => {
  if (b === 0) throw new Error("Cannot modulo by zero");
  return a % b;
};

// Export functions
module.exports = {add,sub,multiply,divide, modulo}
