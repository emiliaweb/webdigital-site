window.addEventListener('DOMContentLoaded', () => {
    const clientsSwiper = new Swiper('#clientsSwiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        allowTouchMove: false,
        speed: 3000,
        autoplay: {
            delay: 0,
        },
        centeredSlides: true,
        disableOnInteraction: true,
        breakpoints: {
            1440: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });
})