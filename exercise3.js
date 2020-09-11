var usertotal = 0;
var CPUtotal = 0;

document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

function user(){
    var userChoice = this.id;
    console.log("User: " + userChoice)

    // var computerChoice = Math.random();
    //      if (computerChoice < 0.34) {
    //          computerChoice = "rock";
    //       }else if(computerChoice <= 0.67) {
    //          computerChoice = "paper";
    //       }else{
    //          computerChoice = "scissors";
    //       }; 

    var computerChoice = Math.floor(Math.random() *3) +1;
          if (computerChoice == 1) {
              computerChoice = "rock";
           }else if(computerChoice == 2) {
              computerChoice = "paper";
           }else if(computerChoice == 3){
              computerChoice = "scissors";
           }; 

    console.log("Computer: " + computerChoice);
    // document.getElementById("computerChoice").innerHTML = ("Computer: " + computerChoice);
    document.getElementById("computerChoice").innerText = ("Computer: " + computerChoice);
    document.getElementById("userChoice").innerText = ("User: " + userChoice);

    console.log(compare(userChoice, computerChoice)); 
    document.getElementById("winner").innerText = compare(userChoice, computerChoice);
    document.getElementById("usertotal").innerHTML = usertotal;
    document.getElementById("CPUtotal").innerHTML = CPUtotal;

    function compare(humanGuess, computerGuess) {
    
        if (humanGuess === computerGuess) {
            return "The result is a tie!";
        }
 
        if (humanGuess === "rock") {
            if (computerGuess === "scissors") {
                usertotal = usertotal +1/2;
                return "You win  with rock wins";
            } else {
                CPUtotal = CPUtotal+1/2;
                return " CPU paper wins";
            }
        }
 
        if (humanGuess === "paper") {
            if (computerGuess === "rock") {
                usertotal = usertotal +1/2;
                return "You win with paper wins";
            } else {
                CPUtotal = CPUtotal+1/2;
                return "CPU scissors wins";
            }
        }
		
        if (humanGuess === "scissors") {
            if (computerGuess === "rock") {
                usertotal = usertotal +1/2;
                return "The CPU with rock wins";
            } else {
                CPUtotal = CPUtotal+1/2;
                return "scissors wins";
            }
        }
    }
}


