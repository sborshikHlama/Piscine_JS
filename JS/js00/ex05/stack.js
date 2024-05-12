// stackFunctions.js

const stackCreate = () => ({
  arr: [],
});

function stackEmpty(stack) {
  if (!stack.arr.length) return true;
  else return false;
}

function stackPush(stack, data) {
  stack.arr.push(data);
}

function stackPeeks(stack) {
  return stack.arr[0];
}

function stackPop(stack) {
  if (stack.arr.length != 0) stack.arr.pop();
}

export { stackCreate, stackEmpty, stackPush, stackPeeks, stackPop };
