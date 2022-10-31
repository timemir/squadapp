const question = document.getElementById("question");
const startButton = document.getElementById("submit");
const userEntry = document.getElementById("who");
const label = document.getElementById("label");
const nameSection = document.getElementById("nameSection");

const namesContainer = document.getElementById("namesContainer");
const addNameButton = document.getElementById("addName");
const startRaffleButton = document.getElementById("startRaffle");
const squadAutofillButton = document.getElementById("squadAutofill");

startButton.addEventListener("click", () => {
  // check if user has entered something to userEntry
  if (userEntry.value === "") {
    alert("Bitte gib etwas ein!");
  } else {
    question.innerHTML = `Wer muss ${userEntry.value}?`;
    question.classList.toggle("hidden");
    label.classList.toggle("hidden");
    startButton.classList.toggle("hidden");
    nameSection.classList.toggle("hidden");
  }
});

function createNamefield(c) {
  c++;
  const newLabel = document.createElement("label");
  const newSpan = document.createElement("span");
  const newInput = document.createElement("input");

  newLabel.setAttribute("for", `name${c}`);
  newLabel.setAttribute("class", "relative block text-left");
  newLabel.setAttribute("id", `label-name${c}`);

  newSpan.setAttribute("class", "text-lg text-tertiarty font-bold");
  newSpan.innerHTML = `Name ${c}`;

  newInput.setAttribute("type", "text");
  newInput.setAttribute("name", `name${c}`);
  newInput.setAttribute("id", `name${c}`);
  newInput.setAttribute(
    "class",
    "placeholder:italic placeholder:text-slate-400 w-full rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-cta focus:ring-cta focus:ring-1 sm:text-sm"
  );
  newInput.setAttribute("placeholder", "Name eingeben...");

  namesContainer.appendChild(newLabel);
  newLabel.appendChild(newSpan);
  newLabel.appendChild(newInput);
}

let nameCounter = 3;
addNameButton.addEventListener("click", () => createNamefield(nameCounter));

startRaffleButton.addEventListener("click", () => {
  // powerful css selector to get all input fields with name starting with "name"
  const nameFields = document.querySelectorAll("input[name^='name']");
  let allFilled = true;
  nameFields.forEach((field) => {
    if (field.value === "") {
      allFilled = false;
    }
  });
  if (allFilled) {
    // Start raffle
    const names = [];
    for (let i = 1; i <= nameCounter; i++) {
      names.push(document.getElementById(`name${i}`).value);
    }
    const randomName = names[Math.floor(Math.random() * names.length)];

    nameSection.classList.toggle("hidden");

    question.innerHTML = `<span class="text-bold text-cta">${randomName}</span> muss ${userEntry.value}!`;
  } else {
    alert("Bitte alle Namen eingeben!");
  }
});

squadAutofillButton.addEventListener("click", () => {
  const squadNames = [
    "Tim",
    "Roman",
    "Daniel",
    "Richard",
    "Jannis",
    "Jannik",
    "Fabian",
    "Plex",
    "Jonny",
    "Mauritz",
    "Simon",
    "Dennis",
    "Erik",
  ];
  // create name fields (starting at 3, because there are already 3 default name fields)
  for (let i = 3; i < squadNames.length; i++) {
    createNamefield(i);
  }

  for (let i = 1; i <= squadNames.length; i++) {
    document.getElementById(`name${i}`).value = squadNames[i - 1];
  } // -1 because the array starts at 0
});
