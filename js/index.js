console.log("SafforDesigns")

$(document).ready(function(){
    $("button").on("click", function(){
      $("button").animate({left: '250px'});
    });
  });


  $("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
  });
  