$(document).ready(function() {
    //Cuando se realiza el hover sobre el avatar
    $('.avatar,.resize').hover(function() {
            $('.pointer-message').fadeOut("fast", function() {});
            $(this).animate({
                opacity: 0.75
            }, 100, function() {});
            $('div.border-message,div.icon-border-message').animate($('div.border-message,div.icon-border-message').removeClass("border-unselect").addClass("border-select"), "fast", function() {});
        },
        //Cuando concluye el hover sobre el avatar
        function() {
            $('.pointer-message').fadeIn("fast", function() {})
            $(this).animate({
                opacity: 1
            }, 100, function() {});
            $('div.border-message,div.icon-border-message').animate($('div.border-message,div.icon-border-message').removeClass("border-select").addClass("border-unselect"), "fast", function() {});
        });


});