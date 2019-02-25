var winHeight;
var footerHeight;
var sectionId;
var sectionPosition;
var fromTop;
var mainHeader = $('.main-header');

// Zadavanje visine sekcijama
function sectionHeight() {
   winHeight = $(window).height();
   footerHeight = $('.main-footer').outerHeight();
   console.log(winHeight);
   console.log(footerHeight);

   $('#home, #about, #gallery').css('min-height', winHeight);
   $('#contact').css('min-height', winHeight - footerHeight);
}
sectionHeight();
$(window).on('resize', function () {
  sectionHeight();
});

// Navigacija
$('nav, .nav-button').on('click', function () {
  $('nav').fadeToggle(300);
  $('.nav-button').toggleClass('white');
})

// Smooth scroll
$('nav a').on('click', function (e) {
   e.preventDefault();

   //Preuzimanje id-ja sekcije
 sectionId = $(this).attr('href');
 console.log(sectionId);
 sectionPosition = $(sectionId).offset().top;
 console.log(sectionPosition);

 $('html, body').animate({
   scrollTop : sectionPosition
 }, 1000);
});

//Skupljanje header-a na scroll
$(window).on('scroll', function() {
fromTop = $(window).scrollTop();
console.log(fromTop);
if (fromTop > 100) {
mainHeader.addClass('change-header');
}else{
  mainHeader.removeClass('change-header');
}
});

//Plugins
$("#contact-form").validate();
$('#gallery .img-holder a').magnificPopup( {
  type : 'image',
  gallery:{
    enabled:true
  }
});
