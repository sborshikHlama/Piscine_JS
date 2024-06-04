window.addEventListener("load", () => {
  const energyElement = document.querySelector(".energy progress");
  let true_width = energyElement.getAttribute("value");

  const intervalId = setInterval(() => {
    if (true_width > 0) {
      true_width -= 10;
      energyElement.setAttribute("value", true_width);
      if (true_width < 20) {
        energyElement.style.setProperty("--c", "red");
      } else {
        energyElement.style.setProperty("--c", "#47d932");
      }
    } else {
      clearInterval(intervalId);
    }
  }, 500);

  const elements = document.querySelectorAll("progress");

  const intervalIdFill = setInterval(() => {
    let allFull = true;

    elements.forEach((el) => {
      let currentProgress = parseFloat(el.getAttribute("value"));
      if (currentProgress < 20) {
        el.style.setProperty("--c", "red");
      } else {
        el.style.setProperty("--c", "#47d932");
      }
      if (currentProgress < 100) {
        currentProgress += 20;
        currentProgress = Math.min(currentProgress, 100);
        el.setAttribute("value", currentProgress);
        allFull = false;
      }
    });

    if (allFull) {
      clearInterval(intervalIdFill);
    }
  }, 5000);
});
