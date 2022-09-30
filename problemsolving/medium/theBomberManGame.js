function bomberMan(n, grid) {
    if (n < 3) return grid;

    // let copy = n

    while (copy > 0){
    }
}



// first iter, grid is as stated.
// sec iter, nothing
// 3rd iter, full grid,
// 4 initial grid bombs blow up, plus [n,s,e,w]- bombs three seconds ago blow up

// 1 start with bombs placed.

// 2 wait
// 3 fill grid
// 4 wait, blow up -3
// 5 fill grid,
// 6 wait, blow up -3
// 7 fill grid,
// 8 wait, blow up -3
// 9 fill grid,
// 10 wait, blow up -3
// 11 fill grid,
// 12 wait, blow up -3

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
