$(document).ready(function(){
  $('blockquote').css("opacity","0");
  $("blockquote").animate({ opacity: 1, top: "0px" }, 2000);
  $(".navi-bar").animate({top: "0px"}, 2000);
  $('.redirect').css("opacity","0");
  $(".redirect").animate({ opacity: 1 }, 2000);

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      $('.navlink').each(function (){
        $(this).removeClass('highlighted');
      });
      // Store hash
      var hash = this.hash;
      if($(this).hasClass('navlink')){
        $(this).addClass('highlighted');
      }
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
    var scrollPos = $(document).scrollTop()+50;

    // Highlight navigation link of current section
    $('.navlink').each(function (){
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('a').removeClass("highlighted");
          currLink.addClass("highlighted");
      }
      else{
          currLink.removeClass("highlighted");
      }
    });

    $(".hideme").each(function(i){
      $(this).css("opacity","0");
      if($(this).next().hasClass("hideme2")){
        $(this).next().css("opacity","0");
      }

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},1500);
        if($(this).next().hasClass("hideme2")){
          $(this).next().animate({'opacity':'1'},2500);
        }
      }
    });
  });

  var time = 0;
  $(".project").hover(function(event){
    var obj = $(this);
    time = setTimeout(function() {
      showCard(obj);
    }, 300);
  }, function(event){
    clearTimeout(time);
    if($(".caption", this).css("visibility") == "visible"){
      hideCard($(this));
    }
  });

  function showCard(obj){
    $(".caption", obj).css("visibility","visible");
    $(".caption", obj).animate({marginTop: '+=1%'}, 500);
    $(".card-img", obj).animate({marginTop: '-=20%'}, 500);
    $(".tech", obj).animate({marginTop: '-=20%'}, 500);
  }

  function hideCard(obj){
    $(".caption", obj).css("visibility","hidden");
    $(".caption", obj).animate({marginTop: '-=1%'}, 500);
    $(".card-img", obj).animate({marginTop: '+=20%'}, 500);
    $(".tech", obj).animate({marginTop: '+=20%'}, 500);
  }
});
