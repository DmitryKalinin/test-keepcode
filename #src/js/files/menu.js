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