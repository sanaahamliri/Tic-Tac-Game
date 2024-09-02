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
    const userPseudo1 = document.getElementById('userPseudo1');
    const userPseudo2 = document.getElementById('userPseudo2');

    let selectedProfile1 = null;
    let selectedProfile2 = null;
    let selectedImageUrl1 = null;
    let selectedImageUrl2 = null;

    profiles.forEach(profile => {
        profile.addEventListener('click', function() {
            if (!selectedProfile1) {
                profile.classList.add('selected');
                selectedProfile1 = profile.id;
                selectedImageUrl1 = window.getComputedStyle(profile).backgroundImage.slice(5, -2);
            } else if (!selectedProfile2 && profile.id !== selectedProfile1) {
                profile.classList.add('selected');
                selectedProfile2 = profile.id;
                selectedImageUrl2 = window.getComputedStyle(profile).backgroundImage.slice(5, -2);
            }
            
            profiles.forEach(p => {
                if (p.id !== selectedProfile1 && p.id !== selectedProfile2) {
                    p.classList.remove('selected');
                }
            });
        });
    });

    startButton.addEventListener('click', function() {
        const pseudo1 = userPseudo1.value.trim();
        const pseudo2 = userPseudo2.value.trim();
        
        if (!selectedProfile1 || !selectedProfile2) {
            alert('Please select both profiles.');
            return;
        }
        
        if (!pseudo1 || !pseudo2) {
            alert('Please enter both pseudos.');
            return;
        }
        
        localStorage.setItem('userPseudo1', pseudo1);
        localStorage.setItem('userPseudo2', pseudo2);
        localStorage.setItem('selectedImageUrl1', selectedImageUrl1);
        localStorage.setItem('selectedImageUrl2', selectedImageUrl2);
        
        window.location.href = 'ticTac.html';
    });
});

