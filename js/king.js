const drawButton = document.getElementById("draw");
const cardContainer = document.getElementById("cardContainer");

const actions = [["2", "2 for you"], ["3", "3 for me"], ["4", "4 to the floor"], ["5", "Spiel: Wenn er liegt, dann liegt er"], ["6", "6 for dicks"], ["7", "7 to heaven"], ["8", "8 is mate"], ["9", "9 is rhyme"], ["10", "Kategorie"], ["Bube", "neue Regel"], ["Queen", "Questionmaster"], ["King", "King's Cup"], ["Ace", "Sip général"]];
const colors = ["clubs", "diamonds", "hearts", "spades"];

class Card {
  constructor(name, action) {
    this.name = name;
    this.action = action;
  }
}

function createDeck() {
  const deck = [];
  for (let i = 0; i < actions.length; i++) {
    for (let c in colors) {
        deck.push(new Card(actions[i][0] + " of " + colors[c], actions[i][1]));
    }
  }
  return deck;
}

deck = createDeck()
var kingCounter = 0;

drawButton.addEventListener("click", () => {
    const randomCard = deck[Math.floor(Math.random() * deck.length)];

    if (randomCard.name.split(" ")[0] === "King") {
        kingCounter++;
        if (kingCounter === 4) {
            const newLabel = document.createElement("label");
            const newSpan = document.createElement("span");

            newLabel.setAttribute("for", `name`);
            newLabel.setAttribute("class", "relative block text-left");
            newLabel.setAttribute("id", `label-name`);

            newSpan.setAttribute("class", "text-lg text-tertiarty font-bold");
            newSpan.innerHTML = "King's Cup wird getrunken, Spiel vorbei";

            cardContainer.appendChild(newLabel);
            newLabel.appendChild(newSpan);

            kingCounter = 0;
            deck = createDeck();
        }
    }

    const newLabel = document.createElement("label");
    const newSpan = document.createElement("span");

    newLabel.setAttribute("for", `name`);
    newLabel.setAttribute("class", "relative block text-left");
    newLabel.setAttribute("id", `label-name`);

    newSpan.setAttribute("class", "text-lg text-tertiarty font-bold");
    newSpan.innerHTML = randomCard.name + " - " + randomCard.action;

    cardContainer.appendChild(newLabel);
    newLabel.appendChild(newSpan);
});

