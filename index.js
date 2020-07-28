$(document).scroll(function () {
  var y = $(this).scrollTop();
  var winheight = $(window).height();
  if (y >= winheight) {
    $("nav").addClass("sticky");
  } else {
    $("nav").removeClass("sticky");
  }
});
