const row = document.getElementById("row")
const tabletop = document.getElementById("tabletop")
const textbox = document.getElementById("text");
const button = document.getElementById("button");
const APIURL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
const cards = []
let kingscount = 0
let deckId


for (let i = 0; i < 25; i+=1) {
    tabletop.appendChild(row.cloneNode(true))
}

const pictures = document.querySelectorAll(".card");


class Card {
    constructor(deckId, elementPicture) {
        this.deckId = deckId
        this.elementPicture = elementPicture
        this.elementPicture.src = "https://deckofcardsapi.com/static/img/back.png"
    }

    flipCard() {

        if (this.elementPicture.src !== "https://deckofcardsapi.com/static/img/back.png") {
            alert("Card already flipped!")
        }
        else {
            fetch(`https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
            .then((card) => card.json())
            .then((card) => {
                this.elementPicture.src = card.cards[0].image
                if (card.cards[0].value === "KING") {
                    kingscount += 1
                    textbox.innerHTML = `${4 - kingscount  } Kings left!`
                    if (kingscount === 4) {
                        alert("GAME OVER!")
                        kingscount = 0
                        window.location.reload()
                    }
                }
            })

        }
    }

}


function drawCard(deckId, elementPicture) {
    return new Card(deckId, elementPicture)
}

function flip(card) {
    card.flipCard()
}

function startGame() {
    textbox.innerHTML = "4 Kings left!"
    fetch(APIURL)
    .then((deck) => deck.json())
    .then((deck) => {
        deckId = deck.deck_id
        for (let i = 0; i < 52; i+=1) {
            cards[i] = drawCard(deckId, pictures[i])
            pictures[i].addEventListener("click", () => {
                flip(cards[i])
            })
        }
        })
}

button.addEventListener("click", () => {
    window.location.reload()
});

startGame()
