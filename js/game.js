    // var

let board = ['','','','','','','','','']
let playerTime = 0
let gameOver = false

let symbols = ['o', 'x']

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

    // this function is responsible for inserting the players into the variable 
    // board that is empty for 'o' or 'x', and making changes between the 
    // players so we know who will play

function handleMove(position) {
    if(gameOver) {
        return
    }

    if(board[position] == '') {
        board[position] = symbols[playerTime]

        gameOver = isWin()

        if(gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0
        }
    }

    return gameOver
}

    // logic to know if there is a winner.
    // these variable positions check each of the elements in the 
    // winSates sequence.
    // this if checks if the positions generate a winner, if 
    // so, it returns true

function isWin() {
    for(let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] &&
           board[pos1] == board[pos3] &&
           board[pos1] != '') {
            return true
        }
    }

    return false
}