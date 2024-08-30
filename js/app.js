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
