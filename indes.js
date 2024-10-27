let currentRotation = 0;
const cardContainer = document.querySelector('.card-container');
const body = document.body;

function updateTheme() {
    // Calcula qual card está ativo baseado na rotação
    const normalizedRotation = ((currentRotation % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / 120) % 3;

    // Remove todas as classes de tema
    body.classList.remove('iron-man-theme', 'black-panther-theme', 'phoenix-theme');

    // Adiciona a classe apropriada
    switch (activeIndex) {
        case 0:
            body.classList.add('iron-man-theme');
            break;
        case 1:
            body.classList.add('black-panther-theme');
            break;
        case 2:
            body.classList.add('phoenix-theme');
            break;
    }
}

function updateRotation() {
    cardContainer.style.transform = `rotateY(${currentRotation}deg)`;
    updateTheme();
}

function nextCard() {
    currentRotation -= 120;
    updateRotation();
}

function prevCard() {
    currentRotation += 120;
    updateRotation();
}

// Suporte a gestos de toque
let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchendX < touchstartX) nextCard();
    if (touchendX > touchstartX) prevCard();
}