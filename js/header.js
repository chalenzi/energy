const hamburgerButton = document.querySelector(".header__hamburger");
const headerNavigation = document.querySelector(".header__navigation");

hamburgerButton.addEventListener("click", function () {
  headerNavigation.classList.toggle("header__navigation--active");
  hamburgerButton.classList.toggle("header__hambuger--active");
  document.body.classList.toggle('stop-scroll');
});


const headerLinks = document.querySelectorAll('.header__navigation-link');

headerLinks.forEach(headerLink => {
  headerLink.addEventListener('click', function () {
    const linkParent = headerLink.parentElement;
    const dropdownItem = linkParent.querySelector('.dropdown');

    if (dropdownItem) {
      dropdownItem.classList.toggle('dropdown--active');
      headerLink.classList.toggle('header__navigation-link--active')
    }
  })
})