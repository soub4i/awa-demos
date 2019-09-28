const copy = document.querySelector("#copy");
const past = document.querySelector("#past");
const out = document.querySelector("#out");
const toast = document.querySelector("#toast");
var timer = null;

const notify = text => {
  clearTimeout(timer);
  toast.textContent = text;
  timer = setTimeout(() => {
    toast.hidden = "";
  }, 3000);
};

copy.onclick = () => {
  navigator.clipboard
    .writeText(out.value)
    .then(_ => {
      notify("Copied");
    })
    .catch(_ => console.log("Failed to write clipboard"));
};

/** Read from clipboard when clicking the Paste button */
paste.onclick = () => {
  navigator.clipboard
    .readText()
    .then(text => {
      console.log(text);
      notify(`Past : ${text}`);
    })
    .catch(_ => console.log("Failed to read clipboard"));
};
