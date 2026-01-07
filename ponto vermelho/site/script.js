// Lida com o botão Play na tela inicial
const playButton = document.getElementById("playButton");

if (playButton) {
  playButton.addEventListener("click", () => {
    window.location.href = "jogo.html";
  });
}
