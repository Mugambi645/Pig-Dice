$(document).ready(function(){
  $("#roll call").submit(function(event){
    var name =($("#plyrA-name").val());
    var nameB =($("#plyrB-name").val());
    event.preventDefault();

  });
  $(".dice").click(function(event){

    event.preventDefault();

    var result = die.roll();
    $("#cur1").text(result);
    $("#tot1").text(countTotal.toString());
  });
  $(".die").click(function(event){
    event.preventDefault();
    var result2 = die.roll2();
    $("#cur2").text(result2);
    $("#tot2").text(countTotal.toString());
  });

});
var countTotal=0;
var result;
var diceNumber;
var die = {
  sides: 7,
  roll: function(){
    var diceNumber = Math.floor(Math.random() * this.sides) + 1;
    countTotal+=diceNumber;
    if (diceNumber ===1){
      countTotal = 0;
      $('.die').prop('stop', true);
      $('.dice').prop('stop', false);

    } else if (diceNumber > 1) {
      $('.die').prop('stop', false);
      return diceNumber;
    }
  },
  roll2: function(){
    var diceNumber = Math.floor(Math.random() * this.sides) + 1;
    countTotal+=diceNumber;
    if(diceNumber === 1){
      countTotal = 0;
      $('.die').prop('stop', true);
    $('.dice').prop('stop', false);
    } else if (diceNumber > 1) {
      $('.die').prop('stop', false);
      return diceNumber;
    }
  }
}

function rollDie() {
  var result = die.roll();
  return result;
}
function dieRoll2(){
  var result2 = die.roll2();
  return result2;
}
