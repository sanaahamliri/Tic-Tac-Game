let selectedProfile = localStorage.getItem('selectedProfile');
let selectedName = localStorage.getItem('userPseudo');
console.log(selectedProfile)
let profileElement = document.getElementById('profile');
let pseudoElement = document.getElementsById('userName');

console.log(profileElement)
profileElement.textContent = 'profile : ' + selectedProfile;
pseudoElement.textContent = selectedName;


