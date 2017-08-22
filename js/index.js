$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    } // End if
  });

  $(".nav").focus(function(event){
    $(this).addClass("highlighted");
  })

  $(window).scroll(function(){
    var height = $(window).scrollTop();

    if(height < 690){
      $("#aboutme-link").removeClass("highlighted");
      $("#work-link").removeClass("highlighted");
      $("#contact-link").removeClass("highlighted");
    }
    else if (height >= 690 && height < 1690) {
      $("#aboutme-link").addClass("highlighted");
      $("#work-link").removeClass("highlighted");
      $("#contact-link").removeClass("highlighted");
    }
    else if (height >= 1690 && height < 3200) {
      $("#aboutme-link").removeClass("highlighted");
      $("#work-link").addClass("highlighted");
      $("#contact-link").removeClass("highlighted");
    }
    else {
      $("#aboutme-link").removeClass("highlighted");
      $("#work-link").removeClass("highlighted");
      $("#contact-link").addClass("highlighted");
    }
  });

  $(".project").hover(function(event){
    $(".caption", this).css("visibility","visible");
    $(".caption", this).animate({marginTop: '+=1%'}, 500);
    $(".card-img", this).animate({marginTop: '-=20%'}, 500);
    $(".tech", this).animate({marginTop: '-=20%'}, 500);
  }, function(event){
    $(".caption", this).css("visibility","hidden");
    $(".caption", this).animate({marginTop: '-=1%'}, 500);
    $(".card-img", this).animate({marginTop: '+=20%'}, 500);
    $(".tech", this).animate({marginTop: '+=20%'}, 500);
  });
});
