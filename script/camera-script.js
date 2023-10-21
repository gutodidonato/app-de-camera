var cameraVideo = document.getElementById("camera-view");
var animatedVideo = document.getElementById("animated-video");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    cameraVideo.srcObject = stream;
  })
  .catch(function (error) {
    console.error("Erro ao acessar a câmera: ", error);
  });

function renderFrame() {
  context.drawImage(cameraVideo, 0, 0, canvas.width, canvas.height);
  context.globalAlpha = 0.4;
  context.drawImage(animatedVideo, 50, 50, canvas.width, canvas.height);
  requestAnimationFrame(renderFrame);
}

animatedVideo.onplay = function () {
  renderFrame();
};
