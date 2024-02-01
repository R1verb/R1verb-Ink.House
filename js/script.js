const mobileMenu = document.querySelector('.mobile_menu');
const navList = document.querySelector('.nav_list_mobile');
const navListMain = document.querySelector('.nav_list');
const scroll = document.querySelector('.scroll');
const cart = document.querySelector('.cart');
const mobileMenuLinks = document.querySelectorAll('.nav_list_mobile .nav_link');


const reproductButtons = document.querySelectorAll('.reproduct_button');
const reproductBlocks = document.querySelectorAll('.reproduct_block');

const navListScroll = document.querySelectorAll('.nav_list a[href*="#"]');
const navListMobileScroll = document.querySelectorAll('.nav_list_mobile a[href*="#"]');
const footerNavListScroll = document.querySelectorAll('.footer_nav_list a[href*="#"]');

const allNavLinks = [...navListScroll, ...navListMobileScroll, ...footerNavListScroll];

for (let navLink of allNavLinks) {
    navLink.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = navLink.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


window.onload = function() {
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 10);
};

document.querySelectorAll('.nav_link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile_menu-active');
    navList.classList.toggle('nav_list_mobile-active');
    cart.classList.toggle('cart-active');
    navListMain.classList.toggle('nav_list-active');
    scroll.classList.toggle('scroll-active');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        cart.classList.remove('cart-active');
        navListMain.classList.remove('nav_list-active');
        scroll.classList.remove('scroll-active');
    });
});

const closeMobileMenu = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 200 || windowWidth > 500 || window.scrollY > 200) {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        cart.classList.remove('cart-active');
        navListMain.classList.remove('nav_list-active');
        scroll.classList.remove('scroll-active');
    }
};

window.addEventListener('scroll', closeMobileMenu);
window.addEventListener('resize', closeMobileMenu);




reproductButtons.forEach(button => {
    button.addEventListener('click', () => {
        reproductButtons.forEach(btn => btn.classList.remove('reproduct_button-active'));
        button.classList.add('reproduct_button-active');
        
        const targetId = button.id + '-block';

        reproductBlocks.forEach(block => {
            if (block.id === targetId) {
                block.classList.add('reproduct_block-active');
            } else {
                block.classList.remove('reproduct_block-active');
            }
        });
    });
});