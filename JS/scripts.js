
$(document).ready(function(){
  $('button').click(function(event){
    $("."+event.target.name).toggle()
  });

})