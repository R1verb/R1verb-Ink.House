const mobileMenu = document.querySelector('.mobile_menu');
const navList = document.querySelector('.nav_list_mobile');
const scroll = document.querySelector('.scroll');
const cart = document.querySelector('.cart');
const mobileMenuLinks = document.querySelectorAll('.nav_list_mobile .nav_link');

const reproductButtons = document.querySelectorAll('.reproduct_button');
const reproductBlocks = document.querySelectorAll('.reproduct_block');


mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile_menu-active');
    navList.classList.toggle('nav_list_mobile-active');
    cart.classList.toggle('cart-active');
    scroll.classList.toggle('scroll-active');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        cart.classList.remove('cart-active');
        scroll.classList.remove('scroll-active');
    });
});

const closeMobileMenu = () => {
    if (window.innerWidth > 576) {
        mobileMenu.classList.remove('mobile_menu-active');
        navList.classList.remove('nav_list_mobile-active');
        cart.classList.remove('cart-active');
        scroll.classList.remove('scroll-active');
    }
};

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