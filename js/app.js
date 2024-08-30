let title = document.getElementById('gameTitle');
let scale = 1;
let maxScale = 1.2;
let minScale = 0.8;
let direction = 1;
let speed = 0.005;

function animateTitle() {
    scale += speed * direction;
    title.style.transform = `scale(${scale})`;

    if (scale >= maxScale || scale <= minScale) {
        direction *= -1;
    }

    let offsetX = Math.sin(scale * 10) * 5;
    title.style.transform += ` translateX(${offsetX}px)`;

    requestAnimationFrame(animateTitle);
}

animateTitle();

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('button');
    const profiles = document.querySelectorAll('.profile');
    const UserName = document.getElementById('userPseudo');

    let selectedProfile = null;

    profiles.forEach(profile => {
        profile.addEventListener('click', function() {
            profiles.forEach(p => p.classList.remove('selected'));
            profile.classList.add('selected');
            selectedProfile = profile.id;
        });
    });

    startButton.addEventListener('click', function() {
        const userPseudo = UserName.value.trim();
        
        if (!selectedProfile) {
            alert('Please select a profile.');
            return;
        }
        
        if (!userPseudo) {
            alert('Please enter your pseudo.');
            return;
        }
        
        localStorage.setItem('selectedProfile', selectedProfile);
        localStorage.setItem('userPseudo', userPseudo);
        
        window.location.href = 'ticTac.html';
    });
});
