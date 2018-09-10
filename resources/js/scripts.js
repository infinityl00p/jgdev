$(document).ready(function() {
    $('.light-switch').click((e) => {
      $('body').toggleClass("body--white body--colored");
    });

    $('.toggle').on('click', function() {
      if ($(this).hasClass('on')) {
         $(this).removeClass('on');
      } else {
         $(this).addClass('on');
      }
    });

    $(window).on("resize scroll", function() {
      $('.section__title--about').waypoint(function(direction) {
        $('.section__title--about svg').css('display', 'block');
      }, {
        offset: '75%'
      });

      $('.section__title--portfolio').waypoint(function(direction) {
        $('.section__title--portfolio svg').css('display', 'block');
      }, {
        offset: '75%'
      });
    });

    $("nav a").click(function(e) {
      console.log(e);
      e.preventDefault();
      var dest = $(this).attr('href');
      $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
  });
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};