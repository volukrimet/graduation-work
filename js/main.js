const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
});

const mainSlider = new Swiper('.main-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: '',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: {},
    centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 0,
        }
    }
})