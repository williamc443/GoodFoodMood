
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4274e21671msh77a8a5b0f3909f8p1f940ejsn032c9883e186",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});