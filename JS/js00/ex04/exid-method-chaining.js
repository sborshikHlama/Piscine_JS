const exidMethodChaining = {
  count: 0,
  up: function () {
    exidMethodChaining.count++;
    return this;
  },
  down: function () {
    exidMethodChaining.count--;
    return this;
  },
  showCount: function () {
    console.log(exidMethodChaining.count);
  },
};

exidMethodChaining
  .up()
  .down()
  .up()
  .up()
  .down()
  .up()
  .down()
  .up()
  .up()
  .down()
  .showCount();
