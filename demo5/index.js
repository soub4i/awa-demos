const btn = document.getElementById("btn");

btn.addEventListener("click", e => {
  navigator.vibrate([200, 200, 400, 200, 600]);
});
