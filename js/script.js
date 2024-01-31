const mobileMenu = document.querySelector('.mobile_menu');
const navList = document.querySelector('.nav_list_mobile');
const scroll = document.querySelector('.scroll');
const cart = document.querySelector('.cart');
const mobileMenuLinks = document.querySelectorAll('.nav_list_mobile .nav_link');


const reproductButtons = document.querySelectorAll('.reproduct_button');
const reproductBlocks = document.querySelectorAll('.reproduct_block');

const france = document.getElementById('france');
const germany = document.getElementById('germany');
const england = document.getElementById('england');



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
    mobileMenu.classList('mobile_menu-active');
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

function setActive(element) {
    // Определяем текущий id и формируем id для соответствующего блока
    const id = element.id.replace('-btn', '');
    const targetBlockId = id + '-block';

    // Убираем класс 'reproduct_button-active' у всех кнопок
    reproductButtonElements.forEach(btn => btn.classList.remove('reproduct_button-active'));

    // Добавляем класс 'reproduct_button-active' только к текущей кнопке
    element.classList.add('reproduct_button-active');

    // Добавляем/удаляем класс 'reproduct_block-active' для соответствующих блоков
    reproductBlocks.forEach(block => {
        if (block.id === targetBlockId) {
            block.classList.add('reproduct_block-active');
        } else {
            block.classList.remove('reproduct_block-active');
        }
    });
}

reproductButtons.forEach(button => {
    button.addEventListener('click', () => {
        setActive(button);
    });
});