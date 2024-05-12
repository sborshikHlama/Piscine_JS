const exid = {
  count: 0,
  up: function () {
    exid.count++;
  },
  down: function () {
    exid.count--;
  },
  showCount: function () {
    console.log(exid.count);
  },
};

exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.showCount();
