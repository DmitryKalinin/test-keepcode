const namesDescriptors = ["Парковка", "Архитектура", "Охрана", "Территория"];
const swiperdesc = new Swiper('.swiper-description', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    watchSlidesProgress: true,

    // Navigation arrows
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    pagination: {
        el: ".pagination",
        clickable: true,
        bulletClass: 'desc-pagination',
        bulletActiveClass: 'desc-pagination_active',
        renderBullet: function (index, className) {
            return '<div class="item ' + className + '"><button type="button" class="pagination__btn "><span class="pagination__title">' + namesDescriptors[index] + '</span></button></div>'
        },
    },
});

const swiper = new Swiper(".mySwiper", {
    grid: {
        fill: 'row',
        rows: 2
    },
    slideClass: "doc_slide",
    watchSlidesProgress: true,
    slidesPerView: 4,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 2
            },
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1140: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    spaceBetween: 30,

    pagination: {
        el: ".doc-pagination",
        bulletClass: "doc-pagination__element",
        bulletActiveClass: "doc-pagination__element-active",
        clickable: true,
        renderBullet: function (index, className) {
            return '<button type="button" class="' + className + '"><span class="doc-pagination__active-point"></span></button>'
        },
    },
});

const infrastructureSlider = new Swiper(".inf-swiper", {
    direction: 'vertical',
    initialSlide: 0,
    slidesPerView: 5,
    autoHeight: true,
    watchSlidesProgress: true,
    grid: {
        fill: 'column',
        rows: 1
    },
    controller: {
        by: 'slide'
    },
    clickable: true,
    wrapperClass: "layers",
    slideClass: "item",
    simulateTouch: false,
    navigation: {
        nextEl: '.inf-next',
        prevEl: '.inf-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 5,
        },
    }
})