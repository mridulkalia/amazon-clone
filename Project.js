let Rbutton = document.querySelector(".rbtn");
let Lbutton = document.querySelector(".l-btn");
let content = document.querySelector(".image-box2");
Rbutton.addEventListener("click", function () {
  content.scrollLeft += 900;
});
Lbutton.addEventListener("click", function () {
  content.scrollLeft -= 900;
});
