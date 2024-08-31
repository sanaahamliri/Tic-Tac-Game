let selectedProfile = localStorage.getItem('selectedProfile');
let selectedName = localStorage.getItem('userPseudo');
let selectedImageUrl = localStorage.getItem('selectedImageUrl');

let profileElement = document.getElementById('profile');
let pseudoElement = document.getElementById('userName');

pseudoElement.textContent = 'Pseudo : ' + selectedName;

if (selectedImageUrl) {
    profileElement.style.backgroundImage = `url('${selectedImageUrl}')`;
    profileElement.style.width = '200px';
    profileElement.style.height = '200px';
    profileElement.style.backgroundSize = 'cover';
    profileElement.style.backgroundPosition = 'center';
} else {
    profileElement.textContent = 'Profil : ' + selectedProfile;
}
