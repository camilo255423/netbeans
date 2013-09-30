  var i=0; 
$(
       
    function()
    {
      
      $("#boton1").on("click",clic);  
     
    }
    
 );
     
function clic()
{
    i++;
    item = $("<li>siete"+i+"</li>");
    //$("#lista li").first().append("<li>item"+i+"</li>");
    //console.log($("#lista li").first().html());
   // item.appendTo($("#lista li").first());
    var p = $("<input type='button' value=borrar />");
    var m = $("<input type='button' value=modificar />");
    var d = $("<li></li>");
    d.append("<span >siete</span>");
    d.append(p)
    d.append(m)
    p.on("click",cborrar);
    m.on("click",cmodificar);
    $("#lista li").first().append(d);
    
}
function cborrar()
{
   $(this).parent().remove();
}
function cmodificar()
{
   var objeto = $(this).parent().children("span");
   var texto = $(this).parent().children("span").html();
   var entrada = $("<input type='text' />");
   entrada.val(texto);
   objeto.html(entrada);
   //console.log($(this).parent().children("div").html());
}

