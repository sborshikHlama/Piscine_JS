const dynamicType = {
  value: undefined,
  put: function (value) {
    if (this.value === undefined && typeof value === "number") {
      this.value = value;
    }
  },
  change: function (type) {
    if (this.value !== undefined) {
      if (type === "String") {
        this.value = String(this.value);
      } else if (type === "Number") {
        this.value = Number(this.value);
      } else if (type === "Object") {
        this.value = { ...this.value };
      } else if (type === "Array") {
        this.value = [this.value];
      }
    }
  },
  printType: function () {
    console.log(this.value);
  },
};

// Example usage:
dynamicType.put(42);
dynamicType.change("Array");
dynamicType.printType(); // Output: "42"

dynamicType.put(42);
dynamicType.change("Object");
dynamicType.printType(); // Output: NaN (since "Hello" cannot be converted to a number)
