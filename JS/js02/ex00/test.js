import setTimerTimeout from "./setTimerTimeout.js";
import setTimerInterval from "./setTimerInterval.js";

function printNum(count) {
    console.log(count);
    return count < 3;
}

// setTimerTimeout(printNum, 100); // 0 1 2 3 <= Each output is 100ms apart.
setTimerInterval(printNum, 100);