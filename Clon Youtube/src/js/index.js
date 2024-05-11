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

    
});