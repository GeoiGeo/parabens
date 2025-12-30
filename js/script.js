

document.getElementById("play-music")?.addEventListener("click", () => {
  document.getElementById("audio").play();
});

const fotos = [
  "",
  "",
  ""
];

let index = 0;
const imagem = document.getElementById("carrosel-img");

document.querySelector(".next")?.addEventListener("click", () => {
  index = (index + 1) % fotos.length;
  imagem.src = fotos[index];
});

document.querySelector(".prev")?.addEventListener("click", () => {
  index = (index - 1 + fotos.length) % fotos.length;
  imagem.src = fotos[index];
});