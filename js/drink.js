const drinkBgImage = document.getElementById("drinkBgImage");
const drinkName = document.getElementById("drinkName");
const drinkIngredientsList = document.getElementById("drinkIngredientsList");
const drinkInstructions = document.getElementById("drinkInstructions");
const randomDrinkButton = document.getElementById("randomDrinkButton");
const options = {
  method: "GET",
  headers: {},
};

let drink = {
  name: "",
  ingredients: [],
  instructions: "",
  image: "",
};

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", options)
  .then((response) => response.json())
  .then((response) => {
    // Setting drink object
    drink.name = response.drinks[0].strDrink;
    drink.image = response.drinks[0].strDrinkThumb;
    drink.instructions = response.drinks[0].strInstructions;
    for (let i = 1; i < 16; i++) {
      // combine the ingredient and measure response into one string and push it to the ingredients array
      if (response.drinks[0][`strIngredient${i}`]) {
        // if there is no measure, just push the ingredient
        if (!response.drinks[0][`strMeasure${i}`]) {
          drink.ingredients.push(response.drinks[0][`strIngredient${i}`]);
        } else {
          drink.ingredients.push(
            `${response.drinks[0][`strMeasure${i}`]}- ${
              response.drinks[0][`strIngredient${i}`]
            }`
          );
        }
      }
    }
    // ----------------------------
    // Setting the DOM
    drinkName.innerHTML = drink.name;
    drinkBgImage.setAttribute("src", drink.image);

    // -------- Ingredients list
    const ul = document.createElement("ul");
    ul.classList.add("list-disc");
    drink.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      // Add tailwind styling
      li.classList.add("text-white", "text-lg", "mb-2");
      li.innerHTML = ingredient;
      ul.appendChild(li);
    });
    drinkIngredientsList.appendChild(ul);

    // --------Instructions
    const instructionsArray = drink.instructions.split(".");
    const ol = document.createElement("ol");
    ol.classList.add("list-decimal");
    instructionsArray.forEach((instruction) => {
      if (instruction) {
        const li = document.createElement("li");
        li.classList.add("text-white", "text-lg", "mb-2");
        li.innerHTML = instruction;
        ol.appendChild(li);
      }
    });
    drinkInstructions.appendChild(ol);
    // ----------------------------
  })
  .catch((err) => console.error(err));

// Simple function to reload the page
randomDrinkButton.addEventListener("click", () => {
  location.reload();
});
