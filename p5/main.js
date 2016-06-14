$(document).keypress(function(event) {
  //console.log(event.keyCode);
  if (event.keyCode == 37) {
    $(".cuadrado").animate({"left": "-=50px"}, "slow");
  }
  if (event.keyCode == 39) {
    $(".cuadrado").animate({"left": "+=50px"}, "slow");
  }
})
