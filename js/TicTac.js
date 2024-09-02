const gridSize = 20;
const winLength = 5;
let currentPlayer = 'X';
let cells = [];
let gameActive = true;


if (!localStorage.getItem('scoreX')) localStorage.setItem('scoreX', '0');
if (!localStorage.getItem('scoreO')) localStorage.setItem('scoreO', '0');

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.addEventListener('click', onCellClick);
        board.appendChild(cell);
        cells.push(cell);
    }

    const profileElem1 = document.getElementById('profile1');
    const nameElem1 = document.getElementById('userName1');
    const profileElem2 = document.getElementById('profile2');
    const nameElem2 = document.getElementById('userName2');

    const profileImage1 = localStorage.getItem('selectedImageUrl1');
    const userName1 = localStorage.getItem('userPseudo1');
    const profileImage2 = localStorage.getItem('selectedImageUrl2');
    const userName2 = localStorage.getItem('userPseudo2');

    if (profileImage1) {
        profileElem1.style.backgroundImage = `url(${profileImage1})`;
        profileElem1.style.width = '85px';
        profileElem1.style.height = '85px';
        profileElem1.style.backgroundSize = 'cover';
        profileElem1.style.backgroundPosition = 'center';
    } else {
        profileElem1.textContent = 'Default Profile 1';
    }
    nameElem1.textContent = userName1 || 'Default User 1';

    if (profileImage2) {
        profileElem2.style.backgroundImage = `url(${profileImage2})`;
        profileElem2.style.width = '85px';
        profileElem2.style.height = '85px';
        profileElem2.style.backgroundSize = 'cover';
        profileElem2.style.backgroundPosition = 'center';
    } else {
        profileElem2.textContent = 'Default Profile 2';
    }
    nameElem2.textContent = userName2 || 'Default User 2';

    updatePlayerBorders();
    updateScoreDisplay();
});

function onCellClick(event) {
    if (!gameActive) return;

    const cell = event.target;
    if (cell.innerHTML) return;

    cell.innerHTML = currentPlayer;
    if (isWinningMove()) {
        setTimeout(() => {
            const winnerName = currentPlayer === 'X'
                ? localStorage.getItem('userPseudo1') || 'Player 1'
                : localStorage.getItem('userPseudo2') || 'Player 2';
            alert(`${winnerName} wins!`);
            updateScores(); 
            resetGame();
        }, 100);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updatePlayerBorders();
}

function isWinningMove() {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (checkHorizontal(row, col) ||
                checkVertical(row, col) ||
                checkDiagonalRight(row, col) ||
                checkDiagonalLeft(row, col)) {
                return true;
            }
        }
    }
    return false;
}

function checkHorizontal(row, col) {
    if (col + winLength > gridSize) return false;
    return Array.from({ length: winLength }, (_, i) => cells[row * gridSize + col + i])
        .every(cell => cell.innerHTML === currentPlayer);
}

function checkVertical(row, col) {
    if (row + winLength > gridSize) return false;
    return Array.from({ length: winLength }, (_, i) => cells[(row + i) * gridSize + col])
        .every(cell => cell.innerHTML === currentPlayer);
}

function checkDiagonalRight(row, col) {
    if (row + winLength > gridSize || col + winLength > gridSize) return false;
    return Array.from({ length: winLength }, (_, i) => cells[(row + i) * gridSize + col + i])
        .every(cell => cell.innerHTML === currentPlayer);
}

function checkDiagonalLeft(row, col) {
    if (row - winLength + 1 < 0 || col + winLength > gridSize) return false;
    return Array.from({ length: winLength }, (_, i) => cells[(row - i) * gridSize + col + i])
        .every(cell => cell.innerHTML === currentPlayer);
}

function updatePlayerBorders() {
    const profileElem1 = document.getElementById('profile1');
    const profileElem2 = document.getElementById('profile2');

    profileElem1.style.border = currentPlayer === 'X' ? '5px solid #00ff00' : 'none';
    profileElem2.style.border = currentPlayer === 'O' ? '5px solid #00ff00' : 'none';
}

function updateScores() {
    if (currentPlayer === 'X') {
        let scoreX = parseInt(localStorage.getItem('scoreX'), 10) + 1;
        localStorage.setItem('scoreX', scoreX);
    } else {
        let scoreO = parseInt(localStorage.getItem('scoreO'), 10) + 1;
        localStorage.setItem('scoreO', scoreO);
    }
    updateScoreDisplay();
}

function updateScoreDisplay() {
    const scoreX = localStorage.getItem('scoreX');
    const scoreO = localStorage.getItem('scoreO');
    
    document.getElementById('score1').textContent = `Score : ${scoreX}`;
    document.getElementById('score2').textContent = `Score : ${scoreO}`;
}

function resetGame() {
    cells.forEach(cell => cell.innerHTML = '');
    gameActive = true;
    currentPlayer = 'X';
    updatePlayerBorders();
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('restart-btn').addEventListener('click', restartGame);
    document.getElementById('exit-btn').addEventListener('click', exitGame);
});

function restartGame() {
    cells.forEach(cell => cell.innerHTML = '');
    gameActive = true;
    currentPlayer = 'X';
    updatePlayerBorders();
    updateScoreDisplay(); 
}

function exitGame() {
    localStorage.removeItem('scoreX');
    localStorage.removeItem('scoreO');
    localStorage.removeItem('selectedImageUrl1');
    localStorage.removeItem('userPseudo1');
    localStorage.removeItem('selectedImageUrl2');
    localStorage.removeItem('userPseudo2');

    window.location.href = 'index.html'; 
}




