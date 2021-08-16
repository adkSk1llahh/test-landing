for (const dropdown of document.querySelectorAll(".navbar-select-wrapper")) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".navbar-select").classList.toggle("open");
  });
}
window.addEventListener("click", function (e) {
  for (const select of document.querySelectorAll(".navbar-select")) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});
for (const option of document.querySelectorAll(".navbar-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".navbar-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".navbar-select").querySelector(
        ".navbar-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}

var acc = document.getElementsByClassName("faq-item__text");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var menuButton = document.querySelector(".menu-button");
var menuList = document.querySelector(".main-menu");
var menuCloseButton = document.querySelector(".menu-close-button");
var body = document.querySelector("body");

menuButton.addEventListener("click", function () {
  menuList.classList.toggle("open");
  body.classList.toggle("overlay");
});

while (menuList.length) {
  menuCloseButton.addEventListener("click", function () {
    menuList[0].classList.remove("open");
  });
}

