//Repite texto
$("#textarea").keyup(function(){
  $("#texto").text($(this).val())
})

//Define color
$("#color").change(function(){
  $("#texto").css("color",$(this).val())
})

//Define tañano de la fuente
$("#tamanio").change(function(){
  $("#texto").css("font-size",$(this).val()+"px")
})

//Define tipo de la fuente
$("#fuente").keyup(function(){
  console.log($(this).val());
  $("#texto").css("font-family",$(this).val())
})
