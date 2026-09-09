// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika get-menu di klik

document.querySelector("#get-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav

const getmenu = document.querySelector("#get-menu");

document.addEventListener("click", function (e) {
  if (!getmenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
