let menu = document.querySelector(".menu");
let links = document.querySelectorAll(".nav li a");
let navigation = document.querySelector(".nav");
let homePage = document.querySelector(".home-page");
let socialLinks = document.querySelectorAll(".apps a");

menu.onclick = () => {
  if (navigation.classList.contains("nav-toggle")) {
    closeNav();
  } else {
    openNav();
  }
};

function closeNav() {
  navigation.classList.remove("nav-toggle");
  menu.firstElementChild.src = "images/icon-hamburger.svg";
  menu.firstElementChild.alt = "icon-hamburger"
  homePage.classList.add("home-page-bg-remove");

  setTimeout(() => {
    homePage.classList.remove("home-page-bg");
  }, 200);
}

function openNav() {
  homePage.classList.remove("home-page-bg-remove");
  navigation.classList.add("nav-toggle");
  menu.firstElementChild.src = "images/icon-close.svg";
  menu.firstElementChild.alt = "icon-close"
  homePage.classList.add("home-page-bg");
}

links.forEach((l) => {
  l.onclick = () => {
    closeNav();
  };
});


socialLinks.forEach(s => {
    s.onmouseover = () => {
        let imgLink = s.firstElementChild.src.match(/\D+.svg/gi).join("").slice(1).split(".svg")[0];
        s.firstElementChild.src = imgLink+"-hover"+".svg";
        s.onmouseout = () => {
            s.firstElementChild.src = imgLink+".svg";
        }
    }
})