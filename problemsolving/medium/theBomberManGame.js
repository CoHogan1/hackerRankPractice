
let len = 2
let val = '0'
let x = new Array(len).fill(val.repeat(len))
//console.log(x);

let board =['.......', '...O...', '....O..',  '.......', 'OO.....', 'OO.....']

board[0][0] = board[0][0].replace(board[0][0], "X")
console.log(board);


function fillGrid(grid){
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === ".") grid[i] = grid[i].replace('.', "O");
        }
    }
    return grid
}
//console.log(editGrid(board));

function blowUp(grid){
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === "O"){
                grid[i] = grid[i].replace('O', ".");
            }
        }
    }
    return grid
}
