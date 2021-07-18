$(document).ready(function(){
    var id = $("#recipe_id").val();
    const URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+id+"/information";
    const URL1 = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+id+"/ingredientWidget.json";
    init();
    getRecipe(URL)
    getIngrediant(URL1)
    function init(){
        $("#overlay").show();　
        setTimeout(function(){
            $("#overlay").hide();
        },1500);
    }

})

async function getRecipe(URL){
    try{
        const response = await fetch(URL, {
            headers: {
                    "method": "GET",
                    "x-rapidapi-key": "4274e21671msh77a8a5b0f3909f8p1f940ejsn032c9883e186",
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        });
        const json = await response.json();
        console.log(json);

        $("#recipe_img").attr("src", json.image); 
        $("#recipe_name").html(json.title); 
        $("#recipe_info").html(json.instructions); 
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("finally");
    }
}
async function getIngrediant(URL){
    try{
        const response = await fetch(URL, {
            headers: {
                    "method": "GET",
                    "x-rapidapi-key": "4274e21671msh77a8a5b0f3909f8p1f940ejsn032c9883e186",
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        });
        const json = await response.json();
        
        var ingrediant = "";
        const ingrediants = json.ingredients
        console.log(json);

        for (let i = 0; i < ingrediants.length; i++) {
            if(i>=1){
               var line = "line";
            }else{
               var line = "";
            }
            ingrediant += 
                `<div class="mt-2 ${line}"> ${ingrediants[i].amount.metric.value}  ${ingrediants[i].amount.metric.unit} ${ingrediants[i].name}</div>`
        }
        $("#ingrediant").html(ingrediant);
        ingrediant = "";

    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("finally");
    }
}

const width = window.innerWidth;
if(width <= 600){
    $(".nav-container").hide()
    $("#indexH1").hide()
    $(".nav-dropdown").show()
}else{
    $(".nav-container").show()
    $(".nav-dropdown").hide()
}