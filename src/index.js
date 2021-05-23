jQuery(document).ready(function($) {
  const $burger = $(".header__burger");
  const $headerNav = $(".header__nav");
  const $main = $(".main-screen");
  const $headerBtn = $(".header__btn");
  const $header = $(".header");

  $(window).on(
    "scroll",
    $.debounce(0, function() {
      if ($(this).scrollTop() > 20) {
        $header.addClass("sticky");
      } else {
        $header.removeClass("sticky");
      }
    })
  );

  $headerBtn.on("click", function() {
    $(".dialog").addClass("active");
  });

  $(".dialog__close").on("click", function() {
    $(".dialog").removeClass("active");
  });
  $header.fadeOut().fadeIn(2500);
  $main.fadeOut().fadeIn(2500);

  $burger.on("click", function() {
    $headerNav.toggleClass("active");
    $burger.toggleClass("active");
    $("html").toggleClass("fixed-page");
  });

  $(".services__item-subtitle").on("click", function() {
    $(this)
      .toggleClass("active")
      .next()
      .slideToggle(300);
  });

  let $Seconds = $(".time").text(),
    int;
  int = setInterval(function() {
    if ($Seconds > 0) {
      $Seconds--;
      $(".time").text($Seconds);
      блок;
    } else {
      clearInterval(int);
      alert("Time is out!");
    }
  }, 1000);

  $(".header__link").on("click", function(e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 800);
  });
});
