var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    }, BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    }, iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }, Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    }, Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    }, any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let unlock = true;
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}

if (isIE()) {
    document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}
// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


document.addEventListener("click", function (e) {
        if (e.target.classList.contains("menu-link")) {
            e.target.classList.toggle("open")
        }
    })
    // menu ==================================
//BodyLock ======================
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}

function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("_lock");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}

function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
//BodyLock ======================
window.onload = () => {
    const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения - половина изображения
        threshold: 0.5
    }

    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                const lazyImg = entry.target
                observer.unobserve(lazyImg)
            }
        })
    }, options)

    // с помощью цикла следим за всеми img на странице
    const arr = document.querySelectorAll('img')
    arr.forEach(i => {
        observer.observe(i)
    })


    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }


    let observer2 = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer2.observe(elm);
    }

}

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("burger-menu")) {
        document.querySelector(".main-menu").classList.toggle("main-menu_hidden")
        document.querySelector(".header").classList.toggle("header_bg");
        document.querySelector(".burger-menu").classList.toggle("burger-menu-active");
        document.querySelector(".logo").classList.toggle("logo-inverse");

    }
})
var mymap = L.map('mapid').setView([44.990, 38.94], 15.2);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG1pdHJ5a2FsaW5pbiIsImEiOiJja3RhOWxwdWYwOW51MnluaXo0a3hjdTZmIn0.-SLGDqfPUEvkmhSHt90wVQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG1pdHJ5a2FsaW5pbiIsImEiOiJja3RhYm5mOXIxa2FjMnRwZTlheTVjaGNnIn0.Jro-Yik0tAQFH2Qj9Q5XIw'
}).addTo(mymap);
var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [76, 76],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});
var azsIcon = new LeafIcon({ iconUrl: '../img/map-icons/azs.svg' }),
    bankIcon = new LeafIcon({ iconUrl: '../img/map-icons/bank.svg' }),
    bankIcon2 = new LeafIcon({ iconUrl: '../img/map-icons/bank2.svg' }),
    cafeIcon = new LeafIcon({ iconUrl: '../img/map-icons/cafe.svg' }),
    daycareIcon = new LeafIcon({ iconUrl: '../img/map-icons/daycare.svg' }),
    hospitalIcon = new LeafIcon({ iconUrl: '../img/map-icons/hospital.svg' }),
    hospitalIcon2 = new LeafIcon({ iconUrl: '../img/map-icons/hospital2.svg' }),
    locationIcon = new LeafIcon({ iconUrl: '../img/map-icons/location.svg' }),
    pullIcon = new LeafIcon({ iconUrl: '../img/map-icons/pull.svg' }),
    shopIcon = new LeafIcon({ iconUrl: '../img/map-icons/shop.svg' }),
    shopIcon2 = new LeafIcon({ iconUrl: '../img/map-icons/shop2.svg' });

var azs = L.marker([44.991, 38.938], { icon: azsIcon }).bindPopup('Заправка'),
    bank = L.marker([44.992, 38.939], { icon: bankIcon }).bindPopup('Банк'),
    bank2 = L.marker([44.993, 38.938], { icon: bankIcon2 }).bindPopup('Банк'),
    cafe = L.marker([44.994, 38.938], { icon: cafeIcon }).bindPopup('Кафе'),
    daycare = L.marker([44.995, 38.937], { icon: daycareIcon }).bindPopup('Детский сад'),
    hospital = L.marker([44.996, 38.938], { icon: hospitalIcon }).bindPopup('Больница'),
    hospital2 = L.marker([44.997, 38.948], { icon: hospitalIcon2 }).bindPopup('Больница'),
    locationPoint = L.marker([44.998, 38.958], { icon: locationIcon }).bindPopup('ЖК Яблоновский');
pull = L.marker([44.999, 38.938], { icon: pullIcon }).bindPopup('Бассейн'),
    shop = L.marker([44.981, 38.9332], { icon: shopIcon }).bindPopup('Магазин'),
    shop2 = L.marker([44.971, 38.933], { icon: shopIcon2 }).bindPopup('Магазин');

var locationGroup = L.layerGroup([azs, bank, bank2, cafe, daycare, hospital, hospital2, locationPoint, pull, shop, shop2]),
    azsGroup = L.layerGroup([azs]),
    shopGroup = L.layerGroup([shop, shop2]),
    daycareGroup = L.layerGroup([daycare]),
    hospitalGroup = L.layerGroup([hospital, hospital2]);

var names = {
    locationGroup,
    azsGroup,
    shopGroup,
    daycareGroup,
    hospitalGroup
}
names['locationGroup'].addTo(mymap)
document.querySelector(".layers").addEventListener("click", (e) => {
    if (e.target.classList.contains("item__btn")) {
        document.querySelectorAll(".item__btn").forEach(el => el.classList.remove("item__btn_active"));
        e.target.classList.add("item__btn_active")
        for (key in names) { names[key].remove() }
        names[e.target.dataset.layer].addTo(mymap)

    }
})
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
