
var countTotal=0;
var result;
var diceNumber;
var die = {
  
  },
  roll2: function(){
    var diceNumber = Math.floor(Math.random() * this.sides) + 1;
    countTotal+=diceNumber;
    if(diceNumber === 1){
      countTotal = 0;
      $('.die').prop('disabled', true);
    $('.dice').prop('disabled', false);
    } else if (diceNumber > 1) {
      $('.die').prop('disabled', false);
      return diceNumber;
    }
  }
}

function rollDie() {
  var result = die.roll();
  return result;
}
function dieRoll2(){
  var resultB = die.rollB();
  return resultB;
}

$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var name =($("#playerA-name").val());
    var nameB =($("#playerB-name").val());


    $(".playerA").append(name);
    $(".playerB").append(nameB);
  });
  $(".dice").click(function(event){
    event.preventDefault();

    var result = die.roll();
    $("#currentA1").text(result);
    $("#totalA1").text(countTotal.toString());
  });
  $(".die").click(function(event){
    event.preventDefault();

    var result2 = die.roll2();

    $("#currentB").text(result2);
    $("#totalB").text(countTotal.toString());
  });


});
