$(document).ready(function ($) {
  $(window).resize(function () {
    if ($(window).width() > 969) {
      $(function () {

        var $sidebar = $("nav"),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 20;

        $window.scroll(function () {
          if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
              marginTop: $window.scrollTop() - offset.top + topPadding },
            1500, "easeInOutBack");
          } else {
            $sidebar.stop().animate({
              marginTop: 0 });

          }
        });

      });
    } else {
      $("nav select").change(function () {
        window.location = $(this).find("option:selected").val();
      });
    }


  });

});