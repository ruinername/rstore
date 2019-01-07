
$('document').ready(function(){
  var item_image = $('.block--service.fade');
  item_image.hover(
    function() {
      $(this).addClass( "faded" );
      $(this).addClass( "faded" );
    }, function() {
      $(this).removeClass( "faded" );
    }
  );

  var navbar = $('#show--navbar');
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 570){
      navbar.removeClass( "d--none" );
    }
    else{
      navbar.addClass( "d--none" );
    }
  }

  $( ".shop-ui" ).tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });

});
