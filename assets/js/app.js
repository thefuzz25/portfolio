//! === ADD HEADER STYLES ON SCROLL ===
const headerScroll = () => {
  const headerElement = document.querySelector('.header');
  this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
}
window.addEventListener('scroll', headerScroll);
//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');
const toggleMenu = () => {
  navbarMenu.classList.toggle('active');
}
menuToggler.addEventListener('click', toggleMenu);
// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksToggleMenu = (e) => {
  if(e.target.classList.contains('navbar__list-link')) navbarMenu.classList.remove('active');
}
window.addEventListener('click', linksToggleMenu);
//! === SWIPER ===
const swiper = new Swiper('.myswiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
//! === LIGHT DARK THEME ===
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//! === TIMELINE TABS ===
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('timeline__active');
    });
    target.classList.add('timeline__active');

    tabs.forEach(tab =>{
      tab.classList.remove('timeline__active');
    });
    tab.classList.add('timeline__active');
  })
})


//! === SCROLL REVEAL ===
const sr = ScrollReveal({
  distance: '50px',
  duration: 1500,
  easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});


sr.reveal('.showcase__title, .showcase__image, .About__information, .section-metadata, .swiper, .post__information-title, .post__information-emoji', {
    origin: 'top',
    interval: 250
});

sr.reveal('.skills__image-wrapper, .about__information, .About__images, .post--left', {
    origin: 'left',
});

sr.reveal('.skills__list, .about__images, .timeline__container, .post--right', {
    origin: 'right',
});

sr.reveal('.footer__container', {
    origin: 'top',
});
