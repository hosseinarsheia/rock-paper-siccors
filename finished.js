
//*******************/ buttons **********
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissor');


//*******************/ Inputs **********
var playerInput = document.getElementById('playerInput');
var pcInput = document.getElementById('pcInput');
var rounds = document.getElementById('rounds');


//*******************/ results **********
var playerPoints = document.getElementById('playerPoints');
var pcPoints     = document.getElementById('pcPoints');
var paragraph = document.getElementById('winnerOfRound');



//******************* pc random answer **********
var randomNum = Math.floor(Math.random() * 3) + 1  ;

var pcGuest = function(){
  if(randomNum === 1 ){
    return 'Rock'
  }else if(randomNum === 2){
    return 'Scissors'
  }else{
    return 'Paper'
  }
}

//******************* each time every button clicked, is value print in it's input part **********

var userInput = function(event){
  return this.event.target.value
}

// reset game
var reset = function(){
  playerPoints.value = playerPoint;
  pcPoints.value = pcPoint ;
  playerInput.value = '';
  pcInput.value = '' ;
}

var playerPoint = 0 ,
    pcPoint = 0 ;
    i = 0
      
// //******************* function to executed in each click buttons **********

var start = function() {
  var roundNumber = Number(rounds.value)
  playerInput.value = userInput();
  pcInput.value = pcGuest();
  
  if( i < roundNumber){
       if( 
        (playerInput.value === "Rock" && pcInput.value === "Scissors") ||
        (playerInput.value === "Paper" && pcInput.value === "Rock")    ||  
        (playerInput.value === "Scissors" && pcInput.value === "Paper") )
        {
          paragraph. innerHTML = 'You Win'+ '<br>' + 'your choice :' + playerInput.value + '<br>' + ' pc choice : ' + pcInput.value;
          playerPoint++

        }else if(playerInput.value === pcInput.value ) {
          paragraph. innerHTML = 'It is draw'+ '<br>' + 'your choice :' + playerInput.value + '<br>' + ' pc choice : ' + pcInput.value;
        
        }else{
          paragraph. innerHTML = 'You lose !!!'+ '<br>' + 'your choice :' + playerInput.value + '<br>' + ' pc choice : ' + pcInput.value;
          pcPoint++
        }
        reset()
        console.log(i)
      }else{
        alert('game limit has been reached');
      }
      i++
    }

             




