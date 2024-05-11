var swiper = new Swiper('.swiper-container', {
    // Opciones del slider
    loop: false, // Habilita el bucle infinito
    slidesPerView: 5, // Número de slides visibles al mismo tiempo
    centeredSlides: false, // Centra el slide activo
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next', // Elemento para el botón de siguiente slide
        prevEl: '.swiper-button-prev', // Elemento para el botón de slide anterior
    },

});
