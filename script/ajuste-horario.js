function atualizarHorario() {
  const dt = new Date();
  const horas = ("0" + dt.getHours()).slice(-2);
  const minutos = ("0" + dt.getMinutes()).slice(-2);
  const horario = horas + ":" + minutos;
  tempo.innerText = horario;
}

const tempo = document.querySelector(".horario");

atualizarHorario();

setInterval(atualizarHorario, 3000);

let lembrar = document.querySelector(".lembrar-depois");

function mostrarLembrete() {
  alert("Não deixe para depois, viva agora!");
}
lembrar.addEventListener("click", () => mostrarLembrete());
