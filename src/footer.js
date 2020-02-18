const top = document.createElement("div");
top.innerText = "top of foot";
top.style = "red";
const bottom = document.createElement("div");
bottom.innerHTML = "bottom";
const footer = document.createElement("footer");
footer.appendChild(top).appendChild(bottom);

export { top, bottom, footer };
