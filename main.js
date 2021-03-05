
var board = []

//create board
for(let i = 0; i < 9; i++){
    board[i] = []
    for(let j = 0; j < 9; j++){
        board[i][j] = 0;
    }
}
drawBoard()

function drawBoard(){

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){

            let id = "r" + (i+1) + "c" + (j+1);
            let cell = document.getElementById(id);
            
            //
            if(board[i][j] > 0 && board[i][j] < 10){
                cell.innerHTML = board[i][j]
            }else{
                cell.innerHTML = ""
            }
            

        }
    }
}

var easy = [[0,0,0,2,6,0,7,0,1],
            [6,8,0,0,7,0,0,9,0],
            [1,9,0,0,0,4,5,0,0],
            [8,2,0,1,0,0,0,4,0],
            [0,0,4,6,0,2,9,0,0],
            [0,5,0,0,0,3,0,2,8],
            [0,0,9,3,0,0,0,7,4],
            [0,4,0,0,5,0,0,3,6],
            [7,0,3,0,1,8,0,0,0]                  ]
var medium = []
var difficult = []

function loadEasy(){
    board = easy
    drawBoard()
}