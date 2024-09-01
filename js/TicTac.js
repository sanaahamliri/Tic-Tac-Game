let selectedProfile = localStorage.getItem('selectedProfile');
let selectedName = localStorage.getItem('userPseudo');
let selectedImageUrl = localStorage.getItem('selectedImageUrl');

let profileElement = document.getElementById('profile');
let pseudoElement = document.getElementById('userName');

pseudoElement.textContent = selectedName;

if (selectedImageUrl) {
    profileElement.style.backgroundImage = `url('${selectedImageUrl}')`;
    profileElement.style.width = '85px';
    profileElement.style.height = '85px';
    profileElement.style.backgroundSize = 'cover';
    profileElement.style.backgroundPosition = 'center';
} else {
    profileElement.textContent = selectedProfile;
}

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const size = 20; 

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        board.appendChild(cell);
    }

});
