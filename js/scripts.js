$(document).ready(function() {

  $("form#prime").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    var input = parseInt($("#num").val());

    var prime= new Array();
    // var divisble=2;

    for (i=2; i<=input; i++){
      prime.push(i);
    }
    for (divisble=2; divisble<=input; divisble++){
      for(i=0; i<input-2; i++){
        if ((prime[i] !== divisble) && (prime[i] % divisble === 0)){
          prime.splice(i,1);
          // i--; // to account for the popes elements
        }

      } //for i
    } //for divisble

    var index=0;
    $("#result").empty();
    prime.forEach(function(){
      $("#result").append("<li>"+prime[index]+"</li>");
      index++;
    });

  }); //for the submit


}); //for the document
