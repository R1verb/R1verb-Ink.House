const mobileMenu = document.querySelector('.mobile_menu');
const navList = document.querySelector('.nav_list_mobile');
const scroll = document.querySelector('.scroll');
const mobileMenuLinks = document.querySelectorAll('.nav_list_mobile .nav_link');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile_menu-active');
    navList.classList.toggle('nav_list_mobile-active');
    scroll.classList.toggle('scroll-active');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        scroll.classList.remove('scroll-active');
    });
});

const closeMobileMenu = () => {
    if (window.innerWidth > 576) {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        scroll.classList.remove('scroll-active');
    }
};

window.addEventListener('resize', closeMobileMenu);
