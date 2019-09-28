const status = document.getElementById("status");

const updateOnlineStatus = () => {
  console.log("s");

  status.innerHTML = navigator.onLine ? "Online" : "Offline";
  status.style = `color : ${navigator.onLine ? "green" : "red"} `;
};

window.addEventListener("load", updateOnlineStatus);

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
