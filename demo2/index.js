var videoElement = document.getElementById("video");

window.addEventListener("visibilitychange", event => {
  if (document.hidden) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
});

videoElement.addEventListener(
  "pause",
  function() {
    document.title = "⏸️ Paused";
  },
  false
);

// When the video plays, set the title.
videoElement.addEventListener(
  "play",
  function() {
    document.title = "▶ Playing";
  },
  false
);
