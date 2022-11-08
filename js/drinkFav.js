function getLocalFavorites() {
  const currentFavs =
    JSON.parse(localStorage.getItem("fav")) ||
    "You currently have no Favorites.";
  return currentFavs;
}

function displayFavs(favDrinks) {
  if (!localStorage.getItem("fav")) {
    const contentWrapper = document.getElementById("contentWrapper");
    const hintWrapper = document.createElement("div");
    const hint = document.createElement("p");
    hintWrapper.className = "flex";
    hint.innerHTML = "You currently have no Favorites.";
    hint.className = "text-red-500 font-bold";
    hintWrapper.appendChild(hint);
    contentWrapper.appendChild(hintWrapper);
    return;
  }
  const contentWrapper = document.getElementById("contentWrapper");
  for (let i = 0; i < favDrinks.length; i++) {
    // DOM Element Creation
    const drinkWrapper = document.createElement("div");
    const drinkName = document.createElement("h2");
    const drinkDetailsWrapper = document.createElement("div");
    const drinkImage = document.createElement("img");
    const drinkIngredientsList = document.createElement("div");
    const drinkInstructionsList = document.createElement("div");

    // DOM Element Tailwind Classes
    drinkWrapper.className = "flex flex-col";
    drinkName.className =
      "text-tertiarty text-3xl text-center md:text-left font-bold mb-5";
    drinkDetailsWrapper.className =
      "flex flex-col items-center md:items-start h-auto md:h-64 xl:h-72 w-full mt-2 rounded-lg overflow-hidden md:flex-row";
    drinkImage.src = favDrinks[i].image;
    drinkImage.className = "h-52 md:h-64 xl:h-72 rounded-lg";
    drinkIngredientsList.className = "md:mx-8 font-serif";
    drinkInstructionsList.className = "mt-10 md:mt-0 mx-5";

    // Drink Name
    drinkName.innerText = favDrinks[i].name;
    // Create Ingredients Unordered List
    const ul = document.createElement("ul");
    ul.className = "list-disc";
    favDrinks[i].ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.className = "text-white text-lg mb-2";
      li.innerText = ingredient;
      ul.appendChild(li);
    });

    // Create Instructions Ordered List
    const ol = document.createElement("ol");
    ol.className = "list-decimal";
    for (let j = 0; j < favDrinks[i].instructions.split(". ").length; j++) {
      const li = document.createElement("li");
      li.className = "text-white text-lg mb-2";
      li.innerText = favDrinks[i].instructions.split(". ")[j];
      ol.appendChild(li);
    }
    // DOM Rendering
    contentWrapper.appendChild(drinkWrapper);

    drinkWrapper.appendChild(drinkName);
    drinkWrapper.appendChild(drinkDetailsWrapper);

    drinkDetailsWrapper.appendChild(drinkImage);
    drinkDetailsWrapper.appendChild(drinkIngredientsList);
    drinkDetailsWrapper.appendChild(drinkInstructionsList);

    drinkIngredientsList.appendChild(ul);
    drinkInstructionsList.appendChild(ol);
  }
}
// Execution
const favDrinks = getLocalFavorites();
displayFavs(favDrinks);
