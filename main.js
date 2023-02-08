var colors = ["#c0392b", "#d35400", "#27ae60", "#f39c12", "#8e44ad", "#7f8c8d"];
document
  .querySelectorAll(".appItem")
  .forEach((v, i) => (v.style.backgroundColor = colors[i]));
