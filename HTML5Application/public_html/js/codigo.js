/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(
     
 function(){
      
 // $("div").html("pero texto del div!!");   
  $("#boton1").on("click", clic);
     
     
 }   
   
  );
 
 function clic()
 {
     $("p:odd").fadeToggle();
     
 }

