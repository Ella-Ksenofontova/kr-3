const openMenu = document.getElementById("open-mobile-menu");
const closeMenu = document.getElementById("close-mobile-menu");
const menu = document.getElementById("mobile-menu");

if (menu && openMenu && closeMenu) {
    openMenu.addEventListener("click", () => {
        menu.classList.add("mobile-menu_open");
        menu.querySelectorAll(".nav__link").forEach(link => link.tabIndex = 0);
    });
    closeMenu.addEventListener("click", () => {
        menu.classList.remove("mobile-menu_open");
        menu.querySelectorAll(".nav__link").forEach(link => link.tabIndex = -1);
    });
}