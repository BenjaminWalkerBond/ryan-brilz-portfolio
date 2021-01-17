// JQuery
$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            // $(".navbar").addClass("sticky");
            $(".nav-link").addClass("sticky");
        }
        else {
            // $(".navbar").removeClass("sticky");
            $(".nav-link").removeClass("sticky");
        }
    });

    // Targets "active" css class when clicked
    $('.menu-toggler').click(() => {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    // Imagine Magnify
    /*
    $('.works').magnificPopup({
        delegate: "a",
        type: "image",
        gallery: { enabled: true }
    })
    */
});