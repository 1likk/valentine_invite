// Создаем падающие сердечки
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartSymbols = ['❤️'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heartsContainer.appendChild(heart);
    }
}

createHearts();

// Кнопка "Да"
const yesBtn = document.getElementById('yessir');
const noBtn = document.getElementById('nooo');
const mainContent = document.getElementById('mainContent');
const successScreen = document.getElementById('successScreen');

// Кнопка "Да" - показываем экран успеха
yesBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    successScreen.style.display = 'block';
    
    // Создаем много сердечек при нажатии
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfettiHeart();
        }, i * 50);
    }
});

function createConfettiHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️‍🔥';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-50px';
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'confettiFall 3s ease-out forwards';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}

// Добавляем анимацию для конфетти
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Убегающая кнопка "Нет"
function moveButton() {
    const btnRect = noBtn.getBoundingClientRect();
    
    // Случайная позиция в пределах видимой области
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;
    
    const randomX = Math.max(20, Math.random() * maxX);
    const randomY = Math.max(20, Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '100';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);