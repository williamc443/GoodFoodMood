$(document).ready(function(){
// page load recipes URI
const URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=18&tags=Dinner%20plate%2C%20salads%2C%family";

const resultsContainer = document.querySelector(".results");

const width = window.innerWidth;//device width  

var c_val = ""
var i_val = ""
var t_val = ""

var time_val
var min_val

    init();
    getTheRecipes();

    //mobile
    if(width <= 600){
        $(".nav-container").hide()
        $("#indexH1").hide()
        $(".nav-dropdown").show()
    }else{
        $(".nav-container").show()
        $(".nav-dropdown").hide()
    }

    function init(){
        $("#overlay").show();　
    }

	$(".results").on("click", ".recipe_img", function(){
		var id = $(this).attr("id");
		location.href = `detail.php?id=${id}`;
	})

    //siderbar click
    $(".js-sidebar-open").on('click', function () {
        var mobileWidthApp = $('body').outerWidth();
        if (mobileWidthApp <= 560) {
            $(this).closest('body').find('.popup-chat-responsive').removeClass('open-chat');
        }

        var $currentSidebar = $(this).closest($sidebar);

        if($currentSidebar.hasClass('open')){
            $sidebar.each(function () {
                var $self = $(this);
                $self.removeClass('open');
                $self.find('.js-sidebar-open').removeClass('active');
            });
        }else {
            $sidebar.each(function () {
                var $self = $(this);
                $self.removeClass('open');
                $self.find('.js-sidebar-open').removeClass('active');
            });
            $currentSidebar.addClass('open');
            $currentSidebar.find('.js-sidebar-open').addClass('active');
        }


        return false;
    });

    //search fillter
    var globalTimeout = null;
    $("#search").on("keyup", function(event) {
        var value = $(this).val().toLowerCase();
        if (globalTimeout != null) {
            clearTimeout(globalTimeout);
        }
        globalTimeout = setTimeout(function() {
            globalTimeout = null;  
            const URL3 = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query="+value+"&number=50&addRecipeInformation=true&offset=0";
            
            $("#overlay").show();　
            getSerchRecipes(URL3)
        }, 1000);
    });


    //siderbar fillter option
    $('.check_btn').bind('change', function () {
        var value = $(this).val().toLowerCase();
        if ($(this).is(':checked')){
            if($(this).parent().parent().attr("id") == 1){
                c_val += "%2C%20" + value
            }
            if($(this).parent().parent().attr("id") == 2){
                t_val += "%2C%20" + value
            }
            if($(this).parent().parent().attr("id") == 3){
                i_val += "%2C%20" + value
            }
            if($(this).parent().parent().attr("id") == 4){
                time_val = value
                min_val = $(this).attr("min");
            }
        }else{
            if($(this).parent().parent().attr("id") == 1){
                c_val = "";
                var filter = $(this).parent().parent()
                for (let i = 0; i < filter.children().length; i++) {
                    var checked = filter.children("div:eq("+i+")").children("input:checked").val();
                    if( checked !=undefined ){
                        c_val += "%2C%20" + checked.toLowerCase();
                    }
                }
            }
            if($(this).parent().parent().attr("id") == 2){
                t_val = "";
                var filter = $(this).parent().parent()
                for (let i = 0; i < filter.children().length; i++) {
                    var checked = filter.children("div:eq("+i+")").children("input:checked").val();
                    if( checked !=undefined ){
                        t_val += "%2C%20" + checked.toLowerCase();
                    }
                }
            }
            if($(this).parent().parent().attr("id") == 3){
                i_val = "";
                filter_val = i_val;

                var filter = $(this).parent().parent()
                for (let i = 0; i < filter.children().length; i++) {
                    var checked = filter.children("div:eq("+i+")").children("input:checked").val();
                    if( checked !=undefined ){
                        i_val += "%2C%20" + checked.toLowerCase();
                    }
                }
            }
        }   
        var search_val;

        catagori = "" ? "" : `query=${c_val.substr(6)}`
        intolerances = "" ? "" :  `intolerances=${i_val.substr(6)}`
        type = "" ? "" :  `type=${t_val.substr(6)}`

        var i_get = "&";   
        var t_get = "&"; 

        if(c_val == ""&& i_val != ""){
            i_get = "";
        }
        else if(c_val == ""&& t_val != ""){
            t_get = "";
        }

        if(c_val == ""){
            catagori = "";
        }
        if(i_val == ""){
            intolerances = "";
            i_get = "";
        }
        if(t_val == ""){
            type = "";
            t_get = "";
        }

        search_val = `${catagori}${i_get}${intolerances}${t_get}${type}`
        console.log(search_val);
        if(time_val != undefined){
            if(time_val != ""&& min_val != ""){
                search_val += `&maxReadyTime=${time_val}&maxReadyTime=${min_val}`;
            }
            // const URL3 = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?"+search_val+"&number=50&addRecipeInformation=true&offset=0";
            // getSerchRecipes(URL3)
            // console.log(URL3)
        }
        // else{
            const URL3 = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?"+search_val+"&number=50&addRecipeInformation=true&offset=0";
            getSerchRecipes(URL3)
            console.log(URL3)
        // }


        $("#overlay").show();　
        setTimeout(function(){
            
        },3000);
     
     });

    async function getTheRecipes() {
        try {
            const response = await fetch(URL, {
                headers: {
                        "x-rapidapi-key": "4274e21671msh77a8a5b0f3909f8p1f940ejsn032c9883e186",
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "Set-Cookie": "cross-site-cookie=whatever; SameSite=None; Secure",
                }
            });
    
            const json = await response.json();
    
            const recipes = json.recipes;
    
            resultsContainer.innerHTML = "";
          
    
            for (let i = 0; i < recipes.length; i++) {
    
                resultsContainer.innerHTML +=
                `
                <a class="recipe_img" id="${recipes[i].id}" class="food" >
                    <div style="background: url('${recipes[i].image}')"></div>
                    <div class="food-detail">
                        <h4>${recipes[i].title}</h4>
                        <div class="time"><i class="far fa-clock"></i> ${recipes[i].readyInMinutes} min</div>
                    </div>
                </a>
                `;
                                                
            };
        }
        catch (error) {
            console.log(error);
            resultsContainer.innerHTML = ("An error occurred when calling the API", error);
        }
        finally {
            $("#overlay").hide();
            pagination();
        }
    }
    
    async function getSerchRecipes(URL3) {
        try {
            const response = await fetch(URL3, {
                headers: {
                        "x-rapidapi-key": "4274e21671msh77a8a5b0f3909f8p1f940ejsn032c9883e186",
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "Set-Cookie": "cross-site-cookie=whatever; SameSite=None; Secure",
                }
            });
    
            const json = await response.json();
    
            resultsContainer.innerHTML = "";
    
            var recipes = json.results
            if(recipes == ""){
                resultsContainer.innerHTML = "<h3 style='grid-column:2;color:#3b8230; text-shadow: 1px 1px 1px #a2a2a2;' class='text-center'>No search result</h3>";
                
                document.querySelector("#pagination-container").style = "display: none;";
            }else{
                if(json.baseUri != undefined){
                    var base_url = json.baseUri + "/";
                }else{
                    var base_url = "";
                }
                
                for (let i = 0; i < recipes.length; i++) {
                    resultsContainer.innerHTML +=
                    `
                    <a class="recipe_img" id="${recipes[i].id}" class="food" >
                        <div style="background: url('${base_url}${recipes[i].image}')"></div>
                        <div class="food-detail">
                            <h4>${recipes[i].title}</h4>
                            <div class="time"><i class="far fa-clock"></i> ${recipes[i].readyInMinutes} min</div>
                        </div>
                    </a>
                    `;
                }
    
                console.log(json.results);
                document.querySelector("#pagination-container").style = "display: block;";
            }
    
        }
        catch (error) {
            console.log(error);
            resultsContainer.innerHTML = ("An error occurred when calling the API", error);
        }
        finally {
            $("#overlay").hide();
            pagination();
            console.log("finally");
        }
    }

    async function pagination(){
        var items = $(".results .recipe_img");
        var numItems = items.length;
        var perPage = 6;
        items.slice(perPage).hide();
    
        $('#pagination-container').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
     }
})
    

function toggleSidebar(e){
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.contains("col-sm-2") ? sidebar.classList.remove("col-sm-2") : sidebar.classList.add("col-sm-2");
    sidebar.classList.contains("active") ? sidebar.classList.remove("active") : sidebar.classList.add("active");
}
function viewDetail(e){
    var j_list = e.parentNode;
    j_list.classList.contains("open") ? j_list.classList.remove("open") : j_list.classList.add("open");
}