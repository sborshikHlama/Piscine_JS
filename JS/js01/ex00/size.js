window.addEventListener("load", () => {
  // Get the current time
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "p.m." : "a.m.";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const localTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  const isoTime = now.toISOString();

  // Update the time element
  const timeElement = document.body.children[1].children[0];
  timeElement.textContent = localTime;
  timeElement.setAttribute("datetime", isoTime);

  // Get the sizes
  const screenSize = `${screen.width} * ${screen.height}`;
  const outerWindowSize = `${window.outerWidth} * ${window.outerHeight}`;
  const innerWindowSize = `${window.innerWidth} * ${window.innerHeight}`;
  const documentSize = `${document.documentElement.scrollWidth} * ${document.documentElement.scrollHeight}`;

  // Create the list items and add them to the ul element
  const ulElement = document.body.children[1].children[1];

  const createListItem = (content) => {
    const li = document.createElement("li");
    li.textContent = content;
    return li;
  };

  ulElement.appendChild(createListItem(`Screen: ${screenSize}`));
  ulElement.appendChild(createListItem(`Window Outter: ${outerWindowSize}`));
  ulElement.appendChild(createListItem(`Window Inner: ${innerWindowSize}`));
  ulElement.appendChild(createListItem(`Document: ${documentSize}`));
});
