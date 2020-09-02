import { showText } from "./helper.js";

const btn = document.querySelector("button");
const txt = document.getElementById("hit");
const par = document.getElementById("output");

btn.addEventListener("click", () => {
  showText(txt, par);
});
