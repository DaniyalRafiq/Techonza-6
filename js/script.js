

$(document).ready(function () {
  $(".menu_bar").click(function () {
    $(".nav_links").toggleClass('active');
    $('body').toggleClass('active');
    $(this).find('.ti').toggleClass("ti-x");
  });
  $(".ti-caret-down").click(function () {
    $(".cate_bottom").slideToggle();
    $(this).toggleClass("ti-caret-down").toggleClass('ti-caret-up')
  });

  $('.modal').modal('show');

});

var swiper = new Swiper(".hero_swiper", {
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  spaceBetween: 20,
  autoplay: true,

});

$(window).scroll(function (event) {
  let $headerHeight = $('header').height();
  if ($(document).scrollTop() > $headerHeight) {
    $('header').addClass("sticky");
  } else if ($(document).scrollTop() < 0.1) {
    $('header').removeClass("sticky")
  }
});

$(document).ready(function () {
  $('.filter_main h4').click(function () {
    $('.filters').toggleClass('slide-out');
  });
});

// var swiper = new Swiper(".store_swiper", {
//   slidesPerView: "auto",
//   grid: {
//     rows: 2,
//   },
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


// Show the loading screen
function showLoadingScreen() {
  $('#loading-screen').fadeIn();
}

// Hide the loading screen
function hideLoadingScreen() {
  $('#loading-screen').fadeOut();
}

$(".filter_").click(function (e) {
  e.preventDefault()
  var myVariable = $(this).attr("data-type");
  
  $(`.single_card_[data-type="${myVariable}"]`).show().siblings(".single_card_").hide();
  if(myVariable == "all"){
    $(".single_card_").show();
  }
})
$('.filter_').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
});

$(function () {
  $('.lazy').Lazy();
});
