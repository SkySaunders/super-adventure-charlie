$(document).ready(function(){
  
  $('#grumpycat').click(function(){
      //code goes here
      console.log("position: ", $('#grumpycat').position() );
    });
    $("#map").draggable({
      containment: $('#container')
  });
  //works
  $("#grumpycat").click(function(){
$("#grumpycat").attr('src','https://piximus.net/media2/71110/family-guy-memes-9.jpeg')
});
  
  $("#grumpycat").draggable({
    stop: function(){
      // when in given position inform user they didnt lose.
      if(  $('#grumpycat').position().left > 100 && $('#grumpycat').position().top > 50){
          alert("Congratulations, you didn't win!");
    }
      else if ($('#grumpycat').position().top < 300){
        alert("not quite there yet!")
      }
      else{
        alert("what ya waiting for?")
      }
    }
  });
    
  
});