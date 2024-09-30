var choice = document.querySelectorAll('.choice');
var resultDiv = document.querySelector('.result');
var choices = ['Rock', 'Paper', 'Scissors'];
 var randomComputerChoice = choices[Math.floor(Math.random() * 3)];
// result = winner(computer, option);




function userChoice(option){
    document.getElementById("computerchoice").innerHTML = ""; 
    // alert(option);
    setTimeout(() => {
        console.log("computers turn");
        }, 2000);
    let computer = computerChoice()
    winner(option, computer)
}

function computerChoice(){
    
    // alert(randomComputerChoice);
   
    setTimeout(() => {
        console.log("computers turn");
        }, 2000);
        document.getElementById("computerchoice").innerHTML = randomComputerChoice;  
    // alert( document.getElementById("computerchoice").innerHTML);
    return randomComputerChoice ;

}

function winner(option, computer){
    setTimeout(() => {
        console.log("computers turn");
        }, 2000);
        if (option === computer) {
            alert("TIE!");
        }
        //  else if (
        //     (player === 'Rock' && computer === 'Scissors') ||
        //     (player === 'Paper' && computer === 'Rock') ||
        //     (player === 'Scissors' && computer === 'Paper')
        // ) {
        //     return 'YOU WIN!';
        // } 
        else {
            alert("NOT A TIE");
        }
       
       
    }
   