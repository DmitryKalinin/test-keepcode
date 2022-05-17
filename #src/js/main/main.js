document.addEventListener("click", (e) => {

    if (e.target.classList.contains("burger-menu")) {
        document.querySelector(".main-menu").classList.toggle("main-menu_hidden")
        document.querySelector(".header").classList.toggle("header_bg");
        document.querySelector(".burger-menu").classList.toggle("burger-menu-active");
        document.querySelector(".logo").classList.toggle("logo-inverse");

    }
})