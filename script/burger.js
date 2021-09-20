const burgerButton = document.querySelector("#menu__btn");
const burgerList = document.querySelector(".menu__list");
const burgerLinks = document.querySelectorAll(".menu__item");

let isOpen = false;

const toggleOpened = () => {
  isOpen = !isOpen;
};

const updateBurger = () => {
  if (!isOpen) {
    burgerButton.innerHTML = `<i class="fas fa-hamburger" id="menu__open"></i>`;
    burgerList.style.visibility = "hidden";
    burgerList.style.top = "-100%";
  }
  if (isOpen) {
    burgerButton.innerHTML = `<i class="fas fa-times-circle" id="menu__close"></i>`;
    burgerList.style.visibility = "visible";
    burgerList.style.top = "0";
  }
};

updateBurger();

burgerButton.addEventListener("click", () => {
  toggleOpened();
  updateBurger();
});

burgerLinks.forEach((link) =>
  link.addEventListener("click", () => {
    burgerList.style.visibility = "hidden";
    toggleOpened();
    updateBurger();
  })
);
