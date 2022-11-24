let keys = document.querySelectorAll(".nota");
const btn = document.querySelector("button");

const notas = {
  c: new Audio("../notas/C.mp3"),
  d: new Audio("../notas/D.mp3"),
  e: new Audio("../notas/E.mp3"),
  f: new Audio("../notas/F.mp3"),
  g: new Audio("../notas/G.mp3"),
  a: new Audio("../notas/A.mp3"),
  b: new Audio("../notas/B.mp3"),
  c1: new Audio("../notas/SC.mp3"),
  d1: new Audio("../notas/SD.mp3"),
  f1: new Audio("../notas/SF.mp3"),
  g1: new Audio("../notas/SG.mp3"),
  a1: new Audio("../notas/SA.mp3"),
};

keys.forEach((key) => key.addEventListener("click", () => notas[key.value].play()))
