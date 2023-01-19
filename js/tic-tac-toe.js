/*
Name: JavaScript Object Activity
Course Code: SODV1201
Class: Software Development Diploma program.
Author: Willian Pereira Munhoz
*/


//global variables
let currentPlayer = "O";
let gameState = "continue"; 
let playCount = 0;
let playerOneScoreCount = 0;
let playerTwoScoreCount = 0;

//document elements queries
let playerMessage = document.getElementById('player-message');
let ticTacToe = document.getElementById('tic-tac-toe');
let fields = document.querySelectorAll('.field');
let resetButton = document.getElementById('reset-button');
let playerOneScoreHTML = document.getElementById('player-1-score');
let playertwoScoreHTML = document.getElementById('player-2-score');


//Starting a multi-dimensional array to represent the game field:
let fieldMarks = [];

//We could assign these values outside of a named function, but we do it here so we are able to recall it later, if needed. This creates an array of objects with 3 keys: {mark: "#", row: "#", column: "#"}
function startFieldMarks() {

    for(let p = 0; p<2; p++ ) {
        for(let q = 0; q<3; q++) {
            fieldMarks.push({"mark": 3*p+q+1, "row": p, "column":q});
    
            if(q==2 && p<2) {
                p++;
                q=-1;
            }
        }
    }

}
//calling it right away - this is only so we have the option to recall this function at any given time.
startFieldMarks();

//Reset fieldMarks.marks to their default value (== field number)
function refreshFieldMarks() {
    let i = 1;
    fieldMarks.forEach(element => {
        element.mark = i;
        i++;
    });
}
// let marks = [];

console.log(fields);

function draw(fieldNumber) {
    if (gameState != "end") {
        playCount++;

        let x = Math.floor((fieldNumber-1)/3);
        let y = (fieldNumber-1)%3;
        let index = 3*x+y;

        if(fields[fieldNumber-1].innerHTML.trim()=="") {
            if(currentPlayer == "O") {
                fields[fieldNumber - 1].innerHTML = '<img src="./img/O.png" class="mark" alt="Circle">';
                playerMessage.innerHTML = "Player 2's turn! (X)";
                fieldMarks[index].mark = "O";
                console.log("[" + x + "][" + y + "] clicked ---> " + currentPlayer);
                checkIfEnd(x, y, currentPlayer);
                currentPlayer = "X";
            }
            else if(currentPlayer == "X") {
                fields[fieldNumber - 1].innerHTML = '<img src="./img/X.png" class="mark" alt="Cross">';
                playerMessage.innerHTML = "Player 1's turn! (O)";
                console.log("[" + x + "][" + y + "] clicked ---> " + currentPlayer);
                fieldMarks[index].mark = "X";
                checkIfEnd(x, y, currentPlayer);
                currentPlayer = "O";
            }
        }
    }
    else if (gameState == "end") {
        enableResetButton();
    }
}

function checkIfEnd(x, y, player) {
    checkRow(x, player);
    checkColumn(y, player);
    checkDiagonals(player);
    if(playCount == 9 && gameState != "end") {
        playerMessage.innerHTML = "Game over. No winner.";
        enableResetButton();
        return;
    };
}

function checkRow(x, player) {
    let score =  0;
    fieldMarks.forEach(element => {
        if(element.row == x && element.mark == player) {
            score++;
        }
    });
    if (score == 3) {
        playerMessage.innerHTML = (' Winner:  ' + player);
        console.log("Winner row: " + (x+1));
        paintWinnerRow(x);
        handleGameOver();
    }
}

function checkColumn(y, player) {
    let score =  0;
    fieldMarks.forEach(element => {
        if(element.column == y && element.mark == player) {
            score++;
        }
    });
    if (score == 3) {
        playerMessage.innerHTML = (' Winner:  ' + player);
        console.log("Winner column: " + (y+1));
        paintWinnerColumn(y);
        handleGameOver();
    }
}

function checkDiagonals(player) {
    let score =  0;
    let winnerDiagonal = 0;

    if(fieldMarks[2].mark == fieldMarks[4].mark && fieldMarks[2].mark == fieldMarks[6].mark) {
        score = 3;
        winnerDiagonal = 1;
    }

    if (score!=3) {
        score = 0;
        if(fieldMarks[0].mark == fieldMarks[4].mark && fieldMarks[0].mark == fieldMarks[8].mark) {
        score = 3;
        winnerDiagonal = 2;
        }
    }
    if (score == 3) {
        playerMessage.innerHTML = (' Winner:  ' + player);
        if (winnerDiagonal == 1) console.log("Winner diagonal: /");
        else if (winnerDiagonal == 2) console.log("Winner diagonal: \\");
        paintWinnerDiagonal(winnerDiagonal);
        handleGameOver();
    }
}
function reset() {
    fields.forEach(element => {
        element.innerHTML = "";        
    });
    playerMessage.innerHTML = "Player 1's turn! (O)";
    currentPlayer = "O";
    gameState = "continue";
    resetColors(); 
    refreshFieldMarks();
    resetButton.setAttribute("disabled", "true");
    resetButton.style.backgroundColor = "#DDDDDD";
    playCount = 0;
}

function handleGameOver() {
    gameState = "end";
    enableResetButton();
    if (currentPlayer == "O") playerOneScoreCount++;
    else if (currentPlayer == "X") playerTwoScoreCount++;
    playerOneScoreHTML.innerHTML = "Score: " + playerOneScoreCount;
    playertwoScoreHTML.innerHTML = "Score: " + playerTwoScoreCount;
}

function paintWinnerRow(x) {
    fields[x*3].style.backgroundColor = "#15bb00";
    fields[x*3+1].style.backgroundColor = "#15bb00";
    fields[x*3+2].style.backgroundColor = "#15bb00";
}
function paintWinnerColumn(y) {
    fields[y].style.backgroundColor = "#15bb00";
    fields[y+3].style.backgroundColor = "#15bb00";
    fields[y+6].style.backgroundColor = "#15bb00";
}
function paintWinnerDiagonal(d) {
    if (d==1) {
        fields[2].style.backgroundColor = "#15bb00";
        fields[4].style.backgroundColor = "#15bb00";
        fields[6].style.backgroundColor = "#15bb00";
    }
    if (d==2) {
        fields[0].style.backgroundColor = "#15bb00";
        fields[4].style.backgroundColor = "#15bb00";
        fields[8].style.backgroundColor = "#15bb00";
    }
}

function resetColors() {
    fields.forEach(element => {
        element.style.backgroundColor = "#cccccc";
    });
}

function resetScore() {
    playerOneScoreCount = 0;
    playerTwoScoreCount = 0;
    playerOneScoreHTML.innerHTML = playerOneScoreCount;
    playertwoScoreHTML.innerHTML = playerTwoScoreCount;
}

function enableResetButton() {
    resetButton.removeAttribute("disabled");
    resetButton.style.backgroundColor="#b9e8ff";
}
