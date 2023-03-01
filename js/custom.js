$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 40) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  // Footer margin set for stick to bottom
  function footerAdj() {
    var footerH = $(".footer").innerHeight();
    $(".footer").css({ "margin-top": -footerH });
    $(".main-content").css({ "padding-bottom": footerH });
  }
  footerAdj();
  $(window).resize(function () {
    footerAdj();
  });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------
  $(".nav-pills .nav-item .nav-link").click(function (e) {
    var $this = $(this);
    var $scrollBox = $this.closest(".nav-pills");
    var $scrollOldPos = $scrollBox.scrollLeft();
    var $scrollPos =
      $this.offset().left +
      $scrollOldPos +
      $this.innerWidth() / 2 -
      $scrollBox.innerWidth() / 2;
    $scrollBox.stop(true, true).animate({ scrollLeft: $scrollPos }, 300);
  });

  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
