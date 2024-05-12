import {
  stackCreate,
  stackEmpty,
  stackPush,
  stackPeeks,
  stackPop,
} from "./stack.js";

// Define a function to compare two values and check if they are equal
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`PASS: ${testName}`);
  } else {
    console.error(`FAIL: ${testName}. Expected ${expected}, but got ${actual}`);
  }
}

// Define test cases
function runTests() {
  // Test stackCreate
  const stack = stackCreate();
  assertEqual(stack.arr.length, 0, "stackCreate should create an empty stack");

  // Test stackEmpty with empty stack
  assertEqual(
    stackEmpty(stack),
    true,
    "stackEmpty should return true for an empty stack"
  );

  // Test stackPush
  stackPush(stack, 42);
  assertEqual(
    stack.arr.length,
    1,
    "stackPush should add an element to the stack"
  );

  // Test stackEmpty with non-empty stack
  assertEqual(
    stackEmpty(stack),
    false,
    "stackEmpty should return false for a non-empty stack"
  );

  // Test stackPeeks with non-empty stack
  assertEqual(
    stackPeeks(stack),
    42,
    "stackPeeks should return the top element of the stack"
  );

  // Test stackPop
  stackPop(stack);
  assertEqual(
    stack.arr.length,
    0,
    "stackPop should remove the top element from the stack"
  );
}

// Run the tests
runTests();
