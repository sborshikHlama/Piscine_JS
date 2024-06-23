function setTimerInterval(callback, interval) {
    let count = 0;

    const intervalId = setInterval(() => {
        const shouldContinue = callback(count);
        if (shouldContinue) count += 1;
        else clearInterval(intervalId);
    }, interval)
}

export default setTimerInterval;