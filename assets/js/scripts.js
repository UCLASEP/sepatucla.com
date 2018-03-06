$(document).ready(function() {
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 500);
});

(function($) {

    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    $("#rush-button").click(function(event) {
      $('html, body').stop().animate({
          scrollTop: $("#rush-main").offset().top - 60
      }, 1450, 'easeInOutExpo');
      event.preventDefault();
    });

    $(document).mousemove(function(event){
      if ($("#shards-container")) {
        var location = 0.5 * $(document).width() - event.pageX;
        $("#shards-img-above").css("transform", "rotateY(" + Math.floor(location / 150) * 20 + "deg)");
        $("#shards-img-mid").css("transform", "rotateY(" + (Math.floor(location / 150) * 40 + 200) + "deg)");
        // $("#shards-img-below").css("transform", "rotateY(" + Math.floor((0.5 * $(document).width() - event.pageX) / 200) * 50 + "deg)");
        $("#shards-img-large").css("transform", "rotateY(" + Math.floor(location / 200) * 10 + "deg) scale(" + (1 + Math.floor(Math.abs(location) / 200) / 20) + ")");
      }
    });

    $("#logo-container").hover(
          function() {
              $("#shards-logo").attr("src", "/assets/images/sep-bird-front.gif");
          },
          function() {
              $("#shards-logo").attr("src", "/assets/images/sep-front-still.png");
          }                         
    );

    $("#logo-second-container").hover(
          function() {
              $("#shards-logo").attr("src", "/assets/images/sep-bird-side.gif");
          },
          function() {
              $("#shards-logo").attr("src", "/assets/images/sep-side-still.png");
          }                         
    );
})(jQuery);
