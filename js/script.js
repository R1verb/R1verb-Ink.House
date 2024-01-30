const mobileMenu = document.querySelector('.mobile_menu');
const navList = document.querySelector('.nav_list_mobile');
const scroll = document.querySelector('.scroll');

mobileMenu.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mobile_menu-active');
    navList.classList.toggle('nav_list_mobile-active');
    scroll.classList.toggle('scroll-active');
});

const closeMobileMenu = () => {
    if (window.innerWidth > 576) {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        scroll.classList.remove('scroll-active');
    }
};



window.addEventListener('resize', closeMobileMenu);