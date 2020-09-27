import {Autoplay, Navigation, Pagination, Swiper} from "swiper/dist/js/swiper.esm";

Swiper.use([Pagination, Navigation, Autoplay]);

new Swiper(".swiper-container", {
    autoplay: {
        delay: 7000,
    },
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});