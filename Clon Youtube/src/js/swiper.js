var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 3,    //Espacio ente cada slider
    mousewheel: true, // Habilita el desplazamiento con el mouse
    freeMode: true, // Permite el desplazamiento libre incluso al llegar al final del slide
    freeModeMomentum: false, // Deshabilita el impulso al llegar al final del slide
    navigation: {
        nextEl: '.swiper-button-next', // Elemento para el botón de siguiente slide
        prevEl: '.swiper-button-prev', // Elemento para el botón de slide anterior
    },
});

