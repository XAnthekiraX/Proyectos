import * as funciones from './funciones'; // Asegúrate de que esto se importe correctamente

$(document).ready(function () {

    // Agregar clases a elementos
    $(".scr-modulos").addClass("h-auto p-2 pl-4 flex flex-wrap justify-start items-start rounded-lg w-full hover:bg-alto-200");
    $(".txt-moduls").addClass("mr-3");
    $(".scr-secciones").addClass("h-auto p-2 pl-4 flex flex-wrap justify-start items-start rounded-lg w-full hover:bg-alto-200");
    $(".txt-secction").addClass("ml-3");
    $(".scr-sub").addClass("h-auto p-2 pl-4 flex flex-wrap justify-start items-start rounded-lg w-full hover:bg-alto-200");
    $(".scr-sub-inf").addClass("");
    $(".txt-secction").addClass("ml-3");

    // Manejar clic en elementos con clase .cambio
    $('.cambio').bind('click', function () {
        $(this).toggleClass("active");
    });

    // Mostrar botones del slider al pasar el mouse sobre el contenedor
    $('.swiper-container').bind('mouseenter', function () {
        $('.swiper-button-prev').addClass('active');
        $('.swiper-button-next').addClass('active');
    });

    // Ocultar botones del slider al salir el mouse del contenedor
    $('.swiper-container').bind('mouseleave', function () {
        $('.swiper-button-prev').removeClass('active');
        $('.swiper-button-next').removeClass('active');
    });

    // Este parece innecesario y posiblemente incorrecto, revisa si realmente necesitas esta parte
    // $('.swiper-button-prev').bind('mouseleave', function () {
    //    $(this).addClass('active');
    // });

    // Acción al hacer clic en el botón del menú
    $('#btn-menu').bind('click', function () {
        // Aquí deberías agregar la acción que quieres realizar con #contenido
        $('#contenido').toggleClass('some-class'); // Ejemplo de acción
    });

    // Mostrar puntos al pasar el mouse sobre #inf
    $('#inf').bind('mouseenter', function () {
        $('#points').addClass('opacity-100').removeClass('opacity-0');
    });

    // Ocultar puntos al salir el mouse de #inf
    $('#inf').bind('mouseleave', function () {
        $('#points').addClass('opacity-0').removeClass('opacity-100');
    });

    // Llamar a la función more_subs del módulo importado
    if (typeof funciones.more_subs === 'function') {
        funciones.more_subs();
    } else {
        console.error('funciones.more_subs is not a function');
    }
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