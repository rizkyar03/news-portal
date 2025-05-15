// Box shadow for Header when the page is scrolled
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
