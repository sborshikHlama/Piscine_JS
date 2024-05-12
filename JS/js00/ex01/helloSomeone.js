function helloSomeone(param) {
  if (typeof param === "string") {
    if (param === "") console.log("Who are you?");
    else console.log(`Hello ${param}!`);
  } else if (param === null) console.log("I am null and void");
  else if (typeof param === "number" && param !== NaN)
    if (param <= 0) console.log("I am Benjamin Button!");
    else console.log(`My age is ${param}`);
  else if (param === NaN) console.log("Age is just a number");
  else if (param === undefined) console.log("Nobody can define me!");
}

export default helloSomeone;

// NaN: Not a number: As the name implies, it is used to denote that the value of an object is not a number. There are many ways that you can generate this error, one being invalid math opertaions such as 0/0 or sqrt(-1)

// undefined: It means that the object doesn't have any value, therefore undefined. This occurs when you create a variable and don't assign a value to it.

// null: It means that the object is empty and isn't pointing to any memory address.

// typeof param === null will not work as expected because typeof null returns 'object', not 'null'.
// typeof param === NaN will always return false because NaN is a special value representing "Not a Number", and its type is 'number'.
// typeof param === undefined will also not work as expected because typeof undefined returns 'undefined'.
