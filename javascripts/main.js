$(document).ready(function() {
  var homeheight = $(window).height();
  $('#home').css('height', homeheight - 50 + 'px');
  $('body').scrollspy({ target: "#myNav", offset: 50 });
})

$('nav a').on('click', function(e) {
  e.preventDefault();
  var targetID = e.currentTarget.id + "Section";

//Fixes issue where animation would go too far in the about section due to the navbar height
  if (targetID == "aboutSection") {
    if ($(window).scrollTop() > $('#aboutSection').offset().top) {
      $('body').animate({
        scrollTop: $('#' + targetID).position().top + .01
      }, 500)
    }
    else
    {
      $('body').animate({
        scrollTop: $('#' + targetID).position().top - 50
      }, 500)
    }
  }
  else {
    $('body').animate({
      scrollTop: $('#' + targetID).position().top - 50
      //was .01
    }, 500)
  }
})

$(window).bind('scroll', function () {
  var numPixels = $('#aboutSection').offset().top - 50; //number of pixels before fixing nav bar to top

  $('#about').blur();
  $('#projects').blur();
  $('#contact').blur();

    //Makes the navbar sticky after scrolling past the landing page
    if ($(window).scrollTop() >= numPixels) {
        $('#myNav').removeClass('navbar-fixed-bottom');
        $('#myNav').addClass('navbar-fixed-top');
        $('#aboutSection').css('margin-top', '50px');
    } 
    else {
         $('#myNav').removeClass('navbar-fixed-top');
         $('#myNav').addClass('navbar-fixed-bottom');
         $('#aboutSection').css('margin-top', '0px');
    }

    //Causes parallax scrolling on the name in the landing page
    $("#name").css({
      'transform' : 'translate(0px, ' + ($(this).scrollTop())/2 + '%)'
    });

    //Fades the name in/out on the landing page when you scroll past it
    var fadeStartPoint = $('#name').offset().top - 70;
    $('#name').css({'opacity':( fadeStartPoint -$(window).scrollTop() )/100});
});

$(".projectPreview").hover(function() {
      $(this).find(".img-caption").fadeIn();
      $(this).find('img').fadeTo(400, 0.4);
    }, function() {
      $(this).find(".img-caption").fadeOut();
      $(this).find('img').fadeTo(400, 1);
  });