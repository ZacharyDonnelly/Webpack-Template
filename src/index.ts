import nav from "./nav";
import { top, bottom, footer } from "./footer";
import makeButton from "./button";
import { red, makeColorStyles } from "./button-styles";
import "./footer.css";
import "./button.css";

const button = makeButton("Yay!");
document.body.appendChild(button);
document.body.appendChild(footer);

console.log(nav(), top, bottom, red, makeColorStyles);
