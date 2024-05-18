// Funciones
export function more_subs() {
    let action = false;
    $('#list-more').click(function () {
        console.log("click");
        if (!action) {
            $("#arrow").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $(".scr-sub-inf").removeClass("h-[0px]").addClass("h-auto");
            action = true;
        } else {
            $("#arrow").addClass("fa-chevron-down").removeClass("fa-chevron-up");
            $(".scr-sub-inf").removeClass("h-auto").addClass("h-[0px]");
            action = false;
        }
    });
}

export function w_menu() {
    let action = false;
    $('#h-menu').click(function () {
        if (!action) {

        } else {

            // $("#list_sub_op").removeClass("h-auto").addClass("h-[0px]");
            action = false;
        }
    });

    more_subs();
    // w_menu();
}

