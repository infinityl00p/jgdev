$(document).ready(function() {
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
});