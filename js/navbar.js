const burgerIcon = document.querySelector(".burger-icon");
burgerIcon.addEventListener("click", showBurgerMenu);

function showBurgerMenu() {
  console.log("HELLO");

  var navbar = document.querySelector("nav");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
}
