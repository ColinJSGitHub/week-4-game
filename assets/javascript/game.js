$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // The Random variable generates a random number value each game.
  // By multiplying a random amount between 0 to 100% of 101, then rounding down, this function is able to always generate a result
  //between 19 and 120.
  //
  $('#randomNumber').text(Random);
  // This appends the value of the Random variable to the randomNumber ID in the html doc, aka displaying the "Pirates' Number"
  

  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  // This sets up the random number for each of the gem choices (1 = sapphire, 2 = emerald, 3 = ruby, 4 = diamond)
  // These variables/functions always generate a result between 1 and 12.


  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Declares new variables for the tallies of wins, losses, and the current total score of the user (in the given game)


$('#gameswon').text(wins);
$('#gameslost').text(losses);


//Function to reset the game, reassigning all values of the gems and the pirates' number.
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 


//Adds the wins to the Win-Loss Record.
function victory(){
alert("You have won! Take your gems and leave this wretched place!");
  wins++; 
  $('#gameswon').text(wins);
  reset();
}


//Adds the losses to the Win-Loss Record, and 
function defeat(){
alert ("You have lost! One of your men is doomed to remain with this treasure, forever!");
  losses++;
  $('#gameslost').text(losses);
  reset()
}


//Setups up the on-click functions for the various gems (adding points to your score of a given value per type each game, and checking win/loss each gem.)
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 

          //Sets up the win and loss conditions (when your total score equals that of the "Pirates' Number", aka the Random variable)
        if (userTotal == Random){
          victory();
        }
        else if ( userTotal > Random){
          defeat();
        }   
  })  


  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          victory();
        }
        else if ( userTotal > Random){
          defeat();
        } 
  })  


  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal == Random){
          victory();
        }
        else if ( userTotal > Random){
          defeat();
        } 
  })  


  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          victory();
        }
        else if ( userTotal > Random){
          defeat();
        }
  });   
}); 