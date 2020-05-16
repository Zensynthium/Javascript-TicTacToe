tictactoe();

var spaces = new Array(9);
var turn = "O";

function mark(event) {
  var position = event.target.getAttribute("id");
  console.log(position);
  document.getElementById(position).innerHTML = turn;
  spaces[position-1] = turn;
  console.log(spaces);
  if (turn == "O") {
    document.getElementById("turn-text").innerHTML = "Player Two's Turn!";
    turn = "X";
  } else {
    document.getElementById("turn-text").innerHTML = "Player One's Turn!";
    turn = "O";
  }
  document.getElementById(position).removeEventListener("click", mark);

  if ((spaces[0] == spaces[1] && spaces[1] == spaces[2] && spaces[2] == "O") || (spaces[3] == spaces[4] && spaces[4] == spaces[5] && spaces[5] == "O") || (spaces[6] == spaces[7] && spaces[7] == spaces[8] && spaces[8] == "O") || (spaces[0] == spaces[3] && spaces[3] == spaces[6] && spaces[6] == "O") || (spaces[1] == spaces[4] && spaces[4] == spaces[7] && spaces[7] == "O") || (spaces[2] == spaces[5] && spaces[5] == spaces[8] && spaces[8] == "O") || (spaces[0] == spaces[4] && spaces[4] == spaces[8] && spaces[8] == "O") || (spaces[2] == spaces[4] && spaces[4] == spaces[6] && spaces[6] == "O")) {
    document.getElementById("win-text").innerHTML = "Player One Wins!";
    for (var i = 0; i < 9; i++) {
      document.getElementById(i+1).removeEventListener("click", mark);
    }
  }

  if ((spaces[0] == spaces[1] && spaces[1] == spaces[2] && spaces[2] == "X") || (spaces[3] == spaces[4] && spaces[4] == spaces[5] && spaces[5] == "X") || (spaces[6] == spaces[7] && spaces[7] == spaces[8] && spaces[8] == "X") || (spaces[0] == spaces[3] && spaces[3] == spaces[6] && spaces[6] == "X") || (spaces[1] == spaces[4] && spaces[4] == spaces[7] && spaces[7] == "X") || (spaces[2] == spaces[5] && spaces[5] == spaces[8] && spaces[8] == "X") || (spaces[0] == spaces[4] && spaces[4] == spaces[8] && spaces[8] == "X") || (spaces[2] == spaces[4] && spaces[4] == spaces[6] && spaces[6] == "X")) {
    document.getElementById("win-text").innerHTML = "Player Two Wins!";
    for (var i = 0; i < 9; i++) {
      document.getElementById(i+1).removeEventListener("click", mark);
    }
  }
}

function tictactoe() {
document.getElementById("win-text").innerHTML = "";
document.getElementById("turn-text").innerHTML = "Player One's Turn!";
//9 spaces in a tic tac toe board && Array size of 9. Duhh.
spaces = new Array(9);
//How to see which players turn it is. Mark function toggles this like a switch
 turn = "O";
//We'll be playing with click events so let's put them in
  for (var i = 0; i < 9; i++) {
    document.getElementById(i+1).addEventListener("click", mark);
    document.getElementById(i+1).innerHTML = "";
  }
}