var choice = document.querySelectorAll('.choice');
var resultDiv = document.querySelector('.result');
var choices = ['Rock', 'Paper', 'Scissors'];
 var randomComputerChoice = choices[Math.floor(Math.random() * 3)];
result = winner(computer, you);




function userChoice(option){
    // alert(option);
    let computer = computerChoice()
    winner(option, computer)
}

function computerChoice(){
    
    alert(randomComputerChoice);
    document.getElementById("#computerchoice").innerHTML = randomComputerChoice;
    return randomComputerChoice ;

}

function winner(option, computer){
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
