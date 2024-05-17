    // DOMContentLoaded is an event that only fires after the document is loaded

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

    // its the function that takes the click, it will insert the players onto 
    // the board that is empty for o or x and alternate the players 
    // (its the handleMove function in game.js).
    // and I also added the updateSquare function so that the squares 
    // are updated for the symbols when we click

function handleClick(event) {
    let square = event.target
    let position = square.id

    if (handleMove(position)) {
        setTimeout(() => {
            alert('O jogo acabou - O vencedor foi o jogador ' + playerTime)
        }, 10)
    }
    updateSquare(position)
}

// function responsible for inserting symbols into squares through html 
// when the symbol is no longer empty, that is, when it is clicked

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

// function that resets the game, restoring the starting values

function restartGame() {
    board = ['', '', '', '', '', '', '', '', '',]
    playerTime = 0
    gameOver = false

    let squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        let symbol = board
        if (symbol != '') {
            square.innerHTML = ''
        }
    })
}