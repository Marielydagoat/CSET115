var choice = document.querySelectorAll('.choice');
var resultDiv = document.querySelector('.result');
var choices = ['Rock', 'Paper', 'Scissors'];
 var randomComputerChoice = choices[Math.floor(Math.random() * 3)];
// result = winner(computer, option);
var score = 0



function userChoice(option){
    document.getElementById("computerchoice").innerHTML = ""; 
    // alert(option);

    let computer = computerChoice()
    winner(option, computer)
}

function computerChoice(){
    
    // alert(randomComputerChoice);
   

        document.getElementById("computerchoice").innerHTML = randomComputerChoice;  
    // alert( document.getElementById("computerchoice").innerHTML);

    return randomComputerChoice ;

}

function winner(option, computer){
    let score = 0
        if (option === computer) {
            alert("TIE!");
        }
         else if (
            (player === 'Rock' && computer === 'Scissors') ||
            (player === 'Paper' && computer === 'Rock') ||
            (player === 'Scissors' && computer === 'Paper')
        ) { score = score + 1
            return  score && 'YOU WIN!' ;
        } 
        else {
            alert("NOT A TIE");
        }
       
       
    }
   