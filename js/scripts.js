(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    new WOW().init();

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    $("#rush-button").click(function(event) {
      $('html, body').stop().animate({
          scrollTop: $("#rush-main").offset().top - 60
      }, 1450, 'easeInOutExpo');
      event.preventDefault();
    });
})(jQuery);
