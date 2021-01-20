// JQuery
$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            
            $(".nav-link").addClass("sticky");
        }
        else {
            
            $(".nav-link").removeClass("sticky");
        }
    });

    
});