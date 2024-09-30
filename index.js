var choice = document.querySelectorAll('.choice');
var resultDiv = document.querySelector('.result');
var choices = ['Rock', 'Paper', 'Scissors'];
let computer = document.getElementById("#computerchoice")
computer = choices[Math.floor(Math.random() * 3)]
result = winner(computer, you)







function winner(computer, you){
        if (player === computer) {
            return "TIE!";
        } else if (
            (player === 'Rock' && computer === 'Scissors') ||
            (player === 'Paper' && computer === 'Rock') ||
            (player === 'Scissors' && computer === 'Paper')
        ) {
            return 'YOU WIN!';
        } else {
            return 'YOU LOST:(';
        }
    }
