// Utiliza jQuery
$(document).ready(function () {

    $('.cambio').bind('click', function () {
        $(".cambio").toggleClass("active");
    });

    let action = false;

    $('#list_sub_sm').click(function () { //=>
        if (!action) {
            $("#list-more").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#list_sub_op").removeClass("h-0").addClass("h-auto");
            action = true;
        } else {
            $("#list-more").addClass("fa-chevron-down").removeClass("fa-chevron-up");
            $("#list_sub_op").removeClass("h-auto").addClass("h-0");
            action = false;
        }
    });

    $('.swiper-container').bind('mouseenter', function () {
        $('.swiper-button-prev').addClass('active')
        $('.swiper-button-next').addClass('active')
    });

    $('.swiper-container').bind('mouseleave', function () {
        $('.swiper-button-prev').removeClass('active')
        $('.swiper-button-next').removeClass('active')
    });

    $('.swiper-button-prev').bind('mouseleave', function () {
        $('.swiper-button-prev').addClass('active')
    });

    $('#btn-menu').bind('click', function () {
        $('#contenido')
    });

    $('#inf').bind('mouseenter', function () {
        $('#points').addClass('opacity-100').removeClass('opacity-0')
    });
    $('#inf').bind('mouseleave', function () {
        $('#points').addClass('opacity-0').removeClass('opacity-100')
    });

});


// // Obtener el contenedor 'modulo'
// const modulo = document.getElementById('modulo');

// // Seleccionar elementos dentro del contenedor 'modulo'
// const elementosDentroModulo = modulo.querySelectorAll('li'); // Por ejemplo, seleccionar elementos con clase 'miClase' dentro de 'modulo'

// $('#btn-menu').click(function () { //=>
//     $('#scroll').addClass("w-24 ").removeClass("w-60")
//     // Iterar sobre los elementos dentro del contenedor 'modulo'
//     elementosDentroModulo.forEach(function () {
        
//         $(elementosDentroModulo).toggleClass("flex-wrap txt-pq flex-Center")
//         $(elementosDentroModulo).addClass("h-30").removeClass("h-10")
        
//     });
// });