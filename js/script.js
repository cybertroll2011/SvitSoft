// nav

const toggleNavBtn = document.querySelector('.nav-toggle-btn');
const nav = document.querySelector('.nav');
const headerInner = document.querySelector('.header__inner');

const toggleNavFunc = () => {
    toggleNavBtn.classList.toggle('active');
    nav.classList.toggle('active');
    headerInner.classList.toggle('active');
}

toggleNavBtn.onclick = toggleNavFunc;



// about company button

const aboutLink = document.querySelector(".main__top-link");
const aboutLinkBg = document.querySelector(".main__top-link-hover");

aboutLink.onmouseenter = () => {
    aboutLinkBg.style.transition = 'none';
    aboutLinkBg.style.left = '-100%';
    setTimeout(() => {
        aboutLinkBg.style.transition = '0.2s ease-in';
        aboutLinkBg.style.left = 0;
    }, 50)
}
aboutLink.onmouseleave = () => {
    aboutLinkBg.style.left = "200%";
}


// propositions swiper
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        },
    },
})