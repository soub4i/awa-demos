const logo = document.getElementById("logo");

window.addEventListener("deviceorientation", e => {
  logo.style.transform =
    "rotateZ(" +
    (e.alpha - 180) +
    "deg) " +
    "rotateX(" +
    e.beta +
    "deg) " +
    "rotateY(" +
    -e.gamma +
    "deg)";
});
