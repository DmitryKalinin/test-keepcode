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