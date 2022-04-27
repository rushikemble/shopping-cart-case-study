const navbarMenuToggleButton = document.querySelector(".menu-icon");
const menuList = document.querySelector(".mb-menu-wp");
console.log(navbarMenuToggleButton);
const authBtns = document.querySelector(".auth-btns-wp");
const navMenu = document.querySelector(".nav-menu");

const menutoggle = () => {
  console.log("clicked");
  if (menuList.style.display == "none") {
    menuList.style.display = "flex";
  } else {
    menuList.style.display = "none";
  }
};

navbarMenuToggleButton.addEventListener("click", menutoggle);
