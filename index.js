let initialColors = [];

    window.onload = function() { //window.load ensures that the fuction works on the whole page
        let buttons = document.getElementsByClassName('button');
        let defaultColors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta"]; // Array of initial colors

        // Set the initial colors of all buttons and store them
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = defaultColors[i];
            initialColors.push(defaultColors[i]); // Save the initial color
        }
    }

    function randomcolor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    function reset() {
        let buttons = document.getElementsByClassName('button');
        // Restore the initial colors of all buttons
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = initialColors[i];
        }
    }

    function changepara(x) {
        let selectcolor = document.getElementById('color').value;
        let buttons = document.getElementsByClassName('button');

        for (let i = 0; i < buttons.length; i++) {
            if (selectcolor === "red") {
                buttons[i].style.backgroundColor = "red";
            } else if (selectcolor === "green") {
                buttons[i].style.backgroundColor = "green";
            } else if (selectcolor === "blue") {
                buttons[i].style.backgroundColor = "blue";
            } else if (selectcolor === "random") {
                buttons[i].style.backgroundColor = randomcolor();
            } else if (selectcolor === "reset") {
                reset();
            }
        }
    }