const URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=12&tags=Dinner%20plate%2C%20salads";
const URL2 = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";

// Get API
const resultsContainer = document.querySelector(".results");

async function getTheRecipes() {
try {
        const response = await fetch(URL, {
                headers: {
                        "x-rapidapi-key": "4274e21671msh77a8a5b0f3909f8p1f940ejsn032c9883e186",
		        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
                }
                });
                const json = await response.json();

                console.log(json);

                const recipes = json.recipes;

                resultsContainer.innerHTML = "";
      

    for (let i = 0; i < recipes.length; i++) {
        console.log(recipes[i].title);

        if (i === 4) {
            break;
        }

        resultsContainer.innerHTML +=
                                        `
                                        <a href="${recipes.spoonacularSourceUrl}" class="card">
                                        <img class= "image" src="${recipes[i].image}" alt="">
                                        <h2>${recipes[i].title}</h2>
                                        </a>
                                        `;

                                        
        };
}
        catch (error) {
            console.log(error);
            resultsContainer.innerHTML = ("An error occurred when calling the API", error);
        }
        finally {
            console.log("finally");
        }
}

        getTheRecipes();