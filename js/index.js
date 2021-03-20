$(document).ready(function () {
    $('.digital-agency__slider').slick({	
        responsive: [
          {
            breakpoint: 700,
            settings: 'unslick'
          }
        ]
      });
});


const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');









