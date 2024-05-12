const month = { key: 7 };
let day = 13;

const timeWarp = (newMonth, newDay) => {
  month.key = newMonth;
  day = newDay;
};

timeWarp(5, 10);
timeWarp(11, 20);
