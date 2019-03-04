$(document).ready(function(){
  $("#roll call").submit(function(event){
    var name =($("#plyr1-name").val());
    var nameB =($("#plyr2-name").val());
    event.preventDefault();
    $(".play1").append(name);
        $(".play2").append(name2);
  });
  function rollDie() {
    var result = roll.Die();
    return result;
  }
  function rollDie2() {
    var result2 = roll.Die2();
    return result2;
  }
  $(".dice").click(function(event){

    event.preventDefault();

    var result = roll.Die();
    $("#cur1").text(result);
    $("#tot1").text(countTotal.toString());
  });
  $(".die").click(function(event){
    event.preventDefault();
    var result2 = roll.Die2();
    $("#cur2").prompt(result2);
    $("#tot2").prompt(countTotal.toString());
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
      $('.die').prop('disabled', true);
      $('.dice').prop('disabled', false);

    } else if (diceNumber > 1) {
      $('.die').prop('disabled', false);
      return diceNumber;
    }
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
