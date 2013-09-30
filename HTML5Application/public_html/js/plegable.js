
$(
    function()
    {
        $("li").on("click", clic);
    }    
    
    
    
  );
function clic(event)
{
   
    $(this).children().toggle(2000);
    event.stopPropagation();
}


