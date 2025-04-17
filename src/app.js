import "bootstrap";
import "./style.css";

let excuseBox = document.querySelector("#excusa");
let reloadBtn = document.querySelector("#reload-button");

let who = ["Un plátano gigante", "Una abuela ninja", "El repartidor de pizza", "El vecino"];
let action = ["hipnotizó", "secuestró", "se sentó encima de", "se comió"];
let what = ["mi planta carnívora", "mi perro", "mis deberes", "mi colección de calcetines"];
let when = ["mientras cantaba en la ducha.", "durante una batalla de breakdance.", "durante el desfile de patos.", "justo antes de salir de casa."];

const randomArrElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.onload = () => {
  excuseBox.innerHTML = `${randomArrElement(who)} ${randomArrElement(action)} ${randomArrElement(what)} ${randomArrElement(when)}`;
}

reloadBtn.addEventListener("click", () => {
  window.location.reload();
});