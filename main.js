const generateCardButton = document.getElementById("generateCard"); //generate card button
const cardText = document.getElementById("card"); //card text element

function generateCard() {
    //function to generate card
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]; //list of suits
    const ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace",
    ]; //list of ranks
    const symbols = ["♥", "♦", "♣", "♠"]; //list of symbols
    const randomSuit = suits[Math.floor(Math.random() * suits.length)]; //get random suit
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)]; //get random rank
    const card = `${randomRank} of ${randomSuit} (${symbols[suits.indexOf(randomSuit)]})`; //set card string text
    cardText.textContent = card; //set card text content to generated card
}
generateCardButton.addEventListener("click", generateCard); //generate card when Generate Card button clicked
