var countTotal = 100;

var dieNumber;
var output;
var die = {
  sides: 7,
  roll: function() {
    var dieNumber = Math.floor(Math.random() * this.sides) + 1;
    countTotal += dieNumber;
    if (dieNumber > 1) {
      $('.dice').prop("disabled", false);
      return dieNumber;

    } else if (dieNumber === 1) {
      countTotal = 0;
      $('.dice').prop("disabled", true);
      $('.die').prop("disabled", false);
    }
  },


  roll2: function() {
    var dieNumber = Math.floor(Math.random() * this.sides) + 1;
    countTotal += dieNumber;
  if (dieNumber > 1) {
    $('.die').prop("disabled", false);
    return dieNumber;

  }  else if (dieNumber === 1) {
      countTotal = 0;
      $('.die').prop("disabled", true)
      $('.dice').prop("disabled", false)

    }
  }
}

function rolldie() {
  var output = die.roll();
  return output;
}

function dieroll2() {
  var output2 = die.roll2();
  return output2;
}

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var name = ($("#player1-name").val());
    var name2 = ($("#player2-name").val());


    $(".play1").append(name);
    $(".play2").append(name2);
  });
  $(".dice").click(function(event) {
    event.preventDefault();

    var result = die.roll();
    $("#current1").text(result);
    $("#total1").text(countTotal.toString());
  });
  $(".die").click(function(event) {
    event.preventDefault();

    var result2 = die.roll2();

    $("#current2").text(result2);
    $("#total2").text(countTotal.toString());
  });


});
