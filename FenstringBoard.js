var fenString = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1";

// Function to create the board from the FEN string
function createBoard(fenString) {
  var fields = fenString.split(" ");
  var piecePlacement = fields[0];
  var rows = piecePlacement.split("/");

  var board = [];
  for (var i = 0; i < 8; i++) {
    board[i] = [];
    for (var j = 0; j < 8; j++) {
      board[i][j] = " ";
    }
  }

  var rowIndex = 7;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var colIndex = 0;
    for (var j = 0; j < row.length; j++) {
      var char = row[j];
      if (isNaN(char)) {
        board[rowIndex][colIndex] = char;
        colIndex++;
      } else {
        for (var k = 0; k < char; k++) {
          board[rowIndex][colIndex] = " ";
          colIndex++;
        }
      }
    }
    rowIndex--;
  }

  return board;
}

// Call the createBoard function to create a new board from the FEN string
var board = createBoard(fenString);

// Function to display the board
function displayBoard() {
  console.log("  a b c d e f g h");
  for (var i = 0; i < 8; i++) {
    var row = board[i];
    var rowString = (8 - i) + " ";
    for (var j = 0; j < 8; j++) {
      rowString += board[i][j] + " ";
    }
    console.log(rowString);
  }
}

// Call the displayBoard function to show the new position
displayBoard();
