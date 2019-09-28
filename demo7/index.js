const video = document.querySelector("#video");

navigator.getUserMedia(
  { video: true, audio: true },
  stream => {
    video.srcObject = stream;
  },
  err => console.log(err)
);
