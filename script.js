document.getElementById("message").addEventListener("click", function () {
  this.style.color = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
});
