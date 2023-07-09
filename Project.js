let Rbutton = document.querySelector(".rbtn");
let Lbutton = document.querySelector(".l-btn");
let content = document.querySelector(".image-box2");
Rbutton.addEventListener("click", function () {
  content.scrollLeft += 900;
});
Lbutton.addEventListener("click", function () {
  content.scrollLeft -= 900;
});

let Sidebar = document.getElementById("sidebar");
let all = document.getElementById("a1");
let black_bg = document.querySelector("#black-bg");
all.addEventListener("click", function () {
  Sidebar.style.transform = "translateX(0)";
  Sidebar.style.transition = "200ms";
  document.body.classList.add("stop-scroll");
});

let Xmark = document.getElementById("xmark");
Xmark.addEventListener("click", function () {
  Sidebar.style.transform = "translateX(-1539px)";
  document.body.classList.remove("stop-scroll");
});

let back_to_top = document.getElementById("footer-first");
back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
let sign_out = document.getElementById("sign-out");
let Lists = document.querySelector(".lists");
sign_out.addEventListener("mouseover", function () {
  Lists.style.display = "block";
  document.body.classList.add("stop-scroll");
});
sign_out.addEventListener("mouseout", function () {
  Lists.style.display = "none";
  document.body.classList.remove("stop-scroll");
});
