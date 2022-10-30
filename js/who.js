const question = document.getElementById("question");
const startButton = document.getElementById("submit");
const userEntry = document.getElementById("who");
const label = document.getElementById("label");
const nameSection = document.getElementById("nameSection");

const namesContainer = document.getElementById("namesContainer");
const addNameButton = document.getElementById("addName");
const startRaffleButton = document.getElementById("startRaffle");

startButton.addEventListener("click", () => {
  question.innerHTML = `Wer muss ${userEntry.value}?`;
  question.classList.toggle("hidden");
  label.classList.toggle("hidden");
  startButton.classList.toggle("hidden");
  nameSection.classList.toggle("hidden");
});

let nameCounter = 3;
addNameButton.addEventListener("click", () => {
  nameCounter++;
  const newLabel = document.createElement("label");
  const newSpan = document.createElement("span");
  const newInput = document.createElement("input");

  newLabel.setAttribute("for", `name${nameCounter}`);
  newLabel.setAttribute("class", "relative block text-left");
  newLabel.setAttribute("id", `label-name${nameCounter}`);

  newSpan.setAttribute("class", "text-lg text-tertiarty font-bold");
  newSpan.innerHTML = `Name ${nameCounter}`;

  newInput.setAttribute("type", "text");
  newInput.setAttribute("name", `name${nameCounter}`);
  newInput.setAttribute("id", `name${nameCounter}`);
  newInput.setAttribute(
    "class",
    "placeholder:italic placeholder:text-slate-400 w-full rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-cta focus:ring-cta focus:ring-1 sm:text-sm"
  );
  newInput.setAttribute("placeholder", "Name eingeben...");

  namesContainer.appendChild(newLabel);
  newLabel.appendChild(newSpan);
  newLabel.appendChild(newInput);
});

startRaffleButton.addEventListener("click", () => {
  const names = [];
  for (let i = 1; i <= nameCounter; i++) {
    names.push(document.getElementById(`name${i}`).value);
  }
  const randomName = names[Math.floor(Math.random() * names.length)];

  nameSection.classList.toggle("hidden");
  // bold text

  question.innerHTML = `<span class="text-bold text-cta">${randomName}</span> muss ${userEntry.value}!`;
});
