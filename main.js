const generateCardButton = document.getElementById('generateCard');
const cardText = document.getElementById('card');

function generateCard() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    const card = `${randomRank} of ${randomSuit}`;
    cardText.textContent = card;
}