tictactoe();

var spaces = new Array(9);
var turn = "O";
var counter = 0;

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
  counter++;



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

  if (counter == 9 && document.getElementById("win-text").innerHTML == "") {
    document.getElementById("win-text").innerHTML = "It's a Draw!";
  }
}

function tictactoe() {
counter = 0;
document.getElementById("win-text").innerHTML = "";
document.getElementById("turn-text").innerHTML = "Player One's Turn!";
spaces = new Array(9);
 turn = "O";
  for (var i = 0; i < 9; i++) {
    document.getElementById(i+1).addEventListener("click", mark);
    document.getElementById(i+1).innerHTML = "";
  }
}