$(document).ready(function(){
  
  $('#grumpycat').click(function(){
      //code goes here
      console.log("position: ", $('#grumpycat').position() );
    });
  //works
  $("#grumpycat").click(function(){
$("#grumpycat").attr('src','https://piximus.net/media2/71110/family-guy-memes-9.jpeg')
});
  
  $("#grumpycat").draggable({
    stop: function(){
      // when in given position inform user they didnt lose.
      if(  $('#grumpycat').position().left > 600){
          alert("Congratulations, you didn't win!");
    }
      else if ($('#grumpycat').position().left > 300 && $('#grumpycat').position().top < 600 ){
        alert("not quite there yet!")
      }
      else{
        alert("what ya waiting for?")
      }
    }
  });
    
  // when in given position inform user they didnt lose.
  
  // check assets for additional resources to complete the work.
  
});