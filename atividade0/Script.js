//criando as cartas
const cardsArray = [
    {name: "😍", img:"😍"},
    {name: "😍", img:"😍"},
    {name: "😂", img:"😂"},
    {name: "😂", img:"😂"},
    {name: "😴", img:"😴"},
    {name: "😴", img:"😴"},
    {name: "😎", img:"😎"},
    {name: "😎", img:"😎"},
    {name: "🤩", img:"🤩"},
    {name: "🤩", img:"🤩"},
    {name: "🥰", img:"🥰"},
    {name: "🥰", img:"🥰"},
    {name: "🥺", img:"🥺"},
    {name: "🥺", img:"🥺"},
    {name: "😄", img:"😄"},
    {name: "😄", img:"😄"},
    {name: "😬", img:"😬"},
    {name: "😬", img:"😬"},
    {name: "🤠", img:"🤠"},
    {name: "🤠", img:"🤠"},
    {name: "😊", img:"😊"},
    {name: "😊", img:"😊"},
];
//embaralhando as cartas
cardsArray.sort(()=>0.5-Math.random());

//renderizar as cartas no tabuleiro
const gameBoard = document.querySelector("#game-board");

cardsArray.forEach((card)=> {
const cardElement = document.createElement("div");
cardElement.classList.add("card");
cardElement.dataset.name = card.name;
cardElement.innerText = "?";
gameBoard.appendChild(cardElement);
});

//criando a lógica do jogo
let firstcard, secondCard;
let hasFlippedCard = false;
let lockBoard = false

function flipCard(){
    if (lockBoard) return;
    if (this === firstcard) return;

    this.classList.add("card-flipped");
    this.innerText = this.dataset.name;

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstcard = this;
   return; 
}

secondCard = this
checkForMatch();
}

function checkForMatch() {
    if(firstcard.dataset.name === secondCard.dataset.name) {
    disableCards ();
    }else{
    unflipCard();
    }
    }

    function disableCards() {
        firstcard.removeEventListener("click",flipCard);
        secondCard.removeEventListener("click",flipCard);
        resetBoard();
    }
    function unflipCard () {
        lockBoard = true;
       
        setTimeout(() => {
        firstcard.classList.remove("card-flipped");
        secondCard.classList.remove("card-flipped");
        firstcard.innerText = "?";
        secondCard.innerText = "?";

        resetBoard();
    }, 1500);
}
function resetBoard () {
    [hasFlippedCard, lockBoard] = [false,false];
    [firstcard, secondCard] = [null, null];
}
document
.querySelectorAll(".card")
.forEach((card) => card.addEventListener("click",flipCard));