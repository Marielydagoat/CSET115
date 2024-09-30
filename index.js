var options = document.querySelectorAll('.choice')
var  value = choice.textContent;
var computerChoice = choice[Math.floor(Math.random() * 3)];
var rock = 1
var paper = 2
var scissors = 3
value = [rock, paper, scissors]


function rock(){
    if (computerChoice === 1 && value[0] ){
    
       x =  document.createElement("h1")
        h1.textContent = "TIE!"
    }
    else if (computerChoice === 2 && value[0]){
    x= document.createElement("h1")
     h1.textContent = "YOU LOST:("
    }
    else if (computerChoice === 3 && value[0]){
       x =  document.createElement("h1")
        h1.textContent = "YOU WON!"
    }
    return x

}

function paper(){
    if (computerChoice === 1 && value[1] ){
         document.createElement("h1")
        h1.textContent = "YOU WON!"
    }
    else if (computerChoice === 2 && value[1]){
        document.createElement("h1")
        h1.textContent = "TIE!"
    }
    else if (computerChoice === 3 && value[1]){
       document.createElement("h1")
        h1.textContent = "YOU LOST:("
    }
}

function scissors(){
    if (computerChoice === 1 && value[2] ){
        document.createElement("h1")
        h1.textContent = "YOU LOST:("
    }
    else if (computerChoice === 2 && value[2]){
         document.createElement("h1")
        h1.textContent = "YOU WON!"
    }
    else if (computerChoice === 3 && value[2]){
        document.createElement("h1")
        h1.textContent = "TIE!"
    }
}


