const generateCardButton = document.getElementById("generateCard"); //generate card button
const cardText = document.getElementById("card"); //card text element
const numCardsInput = document.getElementById("numCards"); //number of cards input element

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
    const rankAbbreviations = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ]; //list of rank abbreviations
    const symbols = ["♥", "♦", "♣", "♠"]; //list of symbols
    let cardList = []; //list to hold generated cards
    for (const suit of suits) {
        //repeat for each suit
        for (const rank of ranks) {
            //repeat for each rank
            cardList.push(
                `${rank} of ${suit} (${symbols[suits.indexOf(suit)]})\n ${rankAbbreviations[ranks.indexOf(rank)]}${symbols[suits.indexOf(suit)]}`,
            ); //add card to list in format "Rank of Suit (Symbol)\nRankAbbreviationSymbol"
        }
    }
    for (let i = 0; i < numCardsInput.value; i++) {
        //loop to generate specified number of cards
        const card = cardList[Math.floor(Math.random() * cardList.length)]; //get random card from list
        cardList.splice(cardList.indexOf(card), 1); //remove card from list to avoid duplicates
        cardText.textContent += card + "\n"; //add card to text content
    }
}
generateCardButton.addEventListener("click", generateCard); //generate card when Generate Card button clicked
