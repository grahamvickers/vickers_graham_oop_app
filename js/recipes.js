(()=>{

    "use strict"

    console.log("We  are smokin'!");


    //this will load dynamic recipes to the recipes.html page

    const recipes = [
        {
            name : 'Authentic Jamaican Jerk Chicken',
            info : 'A true classic with Authentic flavours you can taste!',
            time : '8 hours',
            cost : '$$',
        },
        {
            name : 'Kansas City Spatchcock Chicken',
            info : 'A great dinner for a summer night BBQ with friends!',
            time : '4.5 hours',
            cost : '$$',
        },
        {
            name : 'Lemon Pepper Beer Can Chicken',
            info : 'A weeknight staple that will never let you down!',
            time : '2 hours',
            cost : '$$',
        }
    ];


    const recipeData = document.querySelector('#recipeContainer');


    recipes.forEach(recipe =>{
        recipeData.innerHTML = `<div class="recipeInfo">
                <h2>${recipe.name}</h2>
                <p>${recipe.info}</p>
                <p class="moreInfo">Prep Time: ${recipe.time}</p>
                <p class="costP moreInfo">Cost: ${recipe.cost}</p>
                <a href="#" class="button recipeBtn">▶ READ MORE</a>
            </div>
        `;
    });

})();