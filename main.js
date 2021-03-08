
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
    // console.log("draw")

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
            [7,0,3,0,1,8,0,0,0]]

var medium =    [[0,2,0,6,0,8,0,0,0],
                 [5,8,0,0,0,9,7,0,0],
                 [0,0,0,0,4,0,0,0,0],
                 [3,7,0,0,0,0,5,0,0],
                 [6,0,0,0,0,0,0,0,4],
                 [0,0,8,0,0,0,0,1,3],
                 [0,0,0,0,2,0,0,0,0],
                 [0,0,9,8,0,0,0,3,6],
                 [0,0,0,3,0,6,0,9,0]]

var hard =     [[0,2,0,0,0,0,0,0,0],
                [0,0,0,6,0,0,0,0,3],
                [0,7,4,0,8,0,0,0,0],
                [0,0,0,0,0,3,0,0,2],
                [0,8,0,0,4,0,0,1,0],
                [6,0,0,5,0,0,0,0,0],
                [0,0,0,0,1,0,7,8,0],
                [5,0,0,0,0,9,0,0,0],
                [0,0,0,0,0,0,0,4,0]]

function loadEasy(){

    clearButton()
    clearButton()

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            board[i][j] = easy[i][j]
        }
    }
    findCells()
    colorCells()

    drawBoard()
}
function loadMedium(){

    clearButton()
    clearButton()

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            board[i][j] = medium[i][j]
        }
    }
    findCells()
    colorCells()

    drawBoard()
}
function loadHard(){

    clearButton()
    clearButton()

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            board[i][j] = hard[i][j]
        }
    }
    findCells()
    colorCells()

    drawBoard()
}

//returns true if col includes num, false otherwise
function inCol(col, num){
    for(let i = 0; i < 9; i++){
        if(board[i][col] == num){
            return true
        }
    }
    return false
}

//returns true if square includes num, false otherwise
function inSquare(row, col, num){
    
    square = []
    
    if(row < 3){
        if(col < 3){
            square.push(board[0][0],board[0][1],board[0][2])
            square.push(board[1][0],board[1][1],board[1][2])
            square.push(board[2][0],board[2][1],board[2][2])
        }else if(col < 6){
            square.push(board[0][3],board[0][4],board[0][5])
            square.push(board[1][3],board[1][4],board[1][5])
            square.push(board[2][3],board[2][4],board[2][5])
        }else{
            square.push(board[0][6],board[0][7],board[0][8])
            square.push(board[1][6],board[1][7],board[1][8])
            square.push(board[2][6],board[2][7],board[2][8])
        }
    }else if(row < 6){
        if(col < 3){
            square.push(board[3][0],board[3][1],board[3][2])
            square.push(board[4][0],board[4][1],board[4][2])
            square.push(board[5][0],board[5][1],board[5][2])
        }else if(col < 6){
            square.push(board[3][3],board[3][4],board[3][5])
            square.push(board[4][3],board[4][4],board[4][5])
            square.push(board[5][3],board[5][4],board[5][5])
        }else{
            square.push(board[3][6],board[3][7],board[3][8])
            square.push(board[4][6],board[4][7],board[4][8])
            square.push(board[5][6],board[5][7],board[5][8])
        }
    }else{
        if(col < 3){
            square.push(board[6][0],board[6][1],board[6][2])
            square.push(board[7][0],board[7][1],board[7][2])
            square.push(board[8][0],board[8][1],board[8][2])
        }else if(col < 6){
            square.push(board[6][3],board[6][4],board[6][5])
            square.push(board[7][3],board[7][4],board[7][5])
            square.push(board[8][3],board[8][4],board[8][5])
        }else{
            square.push(board[6][6],board[6][7],board[6][8])
            square.push(board[7][6],board[7][7],board[7][8])
            square.push(board[8][6],board[8][7],board[8][8])
        }
    }

    if(square.includes(num)){
        return true
    }
    return false
}

//an array that stores index of cells needing to be solved
var cells = []
var cellHighest = []

//adds all cells that are empty to array
function findCells(){

    cells = []
    cellHighest = []

    for(let i = 0; i < 81; i++){
  
        row = Math.floor(i / 9)
        col = i%9

        if(board[row][col] == 0){
            cells.push(i)
            cellHighest.push(1)
        }
    }
}
findCells()
colorCells()

function colorCells(){

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            let id = "r" + (i+1) + "c" + (j+1);
            document.getElementById(id).style.fontWeight = "bold";
            document.getElementById(id).style.backgroundColor = "#eee8d5";
        }
    }

    for(let i = 0; i < cells.length; i++){
        row = Math.floor(cells[i] / 9)
        col = cells[i]%9

        let id = "r" + (row+1) + "c" + (col+1);
        document.getElementById(id).style.fontWeight = "normal";
        document.getElementById(id).style.backgroundColor = "#fdf6e3";
    }
}

function cleanCells(){
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            let id = "r" + (i+1) + "c" + (j+1);
            let content = document.getElementById(id).innerHTML;

            let valid = false

            for(let k = 1; k <= 9; k++){
                if(content == k){
                    board[i][j] = k
                    valid = true
                }
            }
            if(!valid){
                board[i][j] = 0
            }
        }
    }
}

function solve(index){

    // console.log("called")

    //check if unsolvable
    if(index < 0){
        console.log("Cannot be solved")
    }else{
        //go to next cell
        row = Math.floor(cells[index] / 9)
        col = cells[index]%9

        // console.log(row, col)

        //brute force try 1 - 9
        for(let j = cellHighest[index]; j <= 9; j++){
            
            //check row
            if (!board[row].includes(j)){
                
                //check col
                if (!inCol(col, j)){
                    
                    //check square
                    if(!inSquare(row, col, j)){
                        
                        //try current value
                        board[row][col] = j

                        //check if solved
                        if (checkFull()){
                            console.log("Full")
                            return true
                        }
                        //if not full continue
                        else{
                            cellHighest[index] = j
                            if(setTimeout(solve, 1, index + 1)){
                                return true
                            }
                        }
                        
                    }
                }
            }     
        }
        //if we reach here current state has failed and we need to backtrack
        //reset highest num reached for this point
        console.log("backtracking")
        board[row][col] = 0
        cellHighest[index] = 1
        solve(index - 1)
    }

    
}

var intervalHandle;

function solveButton(){
    intervalHandle = setInterval(drawBoard, 20)
    cleanCells()
    findCells()
    colorCells()
    solve(0)
}

function checkFull(){
    
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(board[i][j] == 0){
                return false
            }
        }
    }
    
    return true
}

function clearButton(){
    console.log("clearing")
    clearInterval(intervalHandle)

    cells = []
    cellHighest = []
    cleanCells()

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            board[i][j] = 0
            let id = "r" + (i+1) + "c" + (j+1);
            document.getElementById(id).innerHTML = "";
            document.getElementById(id).style.backgroundColor = "#fdf6e3";
        }
    }

    drawBoard()
}



