function setTimerTimeout(callback, interval) {
    let count  = 0;
    function timer() {
        const check_exec = callback(count);
        if (check_exec) {
            count += 1;
            setTimeout(timer, interval);
        }
    }

    setTimeout(timer, interval);
}

export default setTimerTimeout;