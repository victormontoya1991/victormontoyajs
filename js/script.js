const menu = document.getElementById("iconMenu");
function myFunction(x) {
    menu.classList.toggle("change-menu");
    x.classList.toggle("change");
}
const propMenu = {
    burger_menu: document.getElementById('iconMenu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menuPrincipal a')
}
const metMenu = {	
    inicio: function () {		
        propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);
        for (var i = 0; i < propMenu.elem_menu.length; i++) {
            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
        }
    },
    toggleMenu: function () {
        if ( propMenu.menu_activo == false ) {
            propMenu.menu_activo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
        } else{
            propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
        }
    },
    ocultarMenu: function () {
        propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
    }
}
metMenu.inicio()