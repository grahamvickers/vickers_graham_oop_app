(()=>{
    "use strict"

    console.log("We  are smokin'!");


    //this will load dynamic recipes to the recipes.html page

    // const recipes = [
    //     {
    //         name : 'Authentic Jamaican Jerk Chicken',
    //         info : 'A true classic with Authentic flavours you can taste!',
    //         time : '8 hours',
    //         cost : '$$',
    //     },
    //     {
    //         name : 'Kansas City Spatchcock Chicken',
    //         info : 'A great dinner for a summer night BBQ with friends!',
    //         time : '4.5 hours',
    //         cost : '$$',
    //     },
    //     {
    //         name : 'Lemon Pepper Beer Can Chicken',
    //         info : 'A weeknight staple that will never let you down!',
    //         time : '2 hours',
    //         cost : '$$',
    //     }
    // ];

    // un comment const button for content showing v1 (if working)

    //const buttons = document.querySelectorAll(".button");
    //const recipeData = document.querySelector('#recipeContainer');


    // recipes.forEach(recipe =>{
    //     recipeData.innerHTML = `<div class="recipeInfo">
    //             <h2>${recipe.name}</h2>
    //             <p>${recipe.info}</p>
    //             <p class="moreInfo">Prep Time: ${recipe.time}</p>
    //             <p class="costP moreInfo">Cost: ${recipe.cost}</p>
    //             <a href="#" class="button recipeBtn">▶ READ MORE</a>
    //         </div>
    //     `;
    // });

    // dynamic showing of content v2 (this hides and shows recipes in the index.html when clicking on  button):

    let recpBtns = document.querySelectorAll(".recipeCon a");
	let recipesCon = document.querySelectorAll(".recipeContainer");


    function showRecipe(e) {
		console.log("showing recipe");
		for(let i=0; i<recipesCon.length; i++){
			recipesCon[i].style.display = 'none';
		}
		console.log(e.currentTarget.dataset.recp);
		let selectedRecp = e.currentTarget.dataset.recp;
		document.querySelector(`#${selectedRecp}`).style.display = 'block';
	}

	for(let i=0; i<recpBtns.length; i++) {
		recpBtns[i].addEventListener("click", showRecipe)
	}


    // content showing v1 (not working)
    // dynamic showing an hide of content based on the click of recipes on index.html
    
    // console.log(buttons);


    // gsap.to(buttons[0], 1, {left: "60%", ease: Bounce.easeOut});
	// gsap.to(buttons[1], 1, {left: "60%", ease: Bounce.easeOut});

    // function showRecipes(e) {
	// 	// console.log("showInfo called")
	// 	// console.log(e.currentTarget.dataset.btn);
	// 	let btnNum = e.currentTarget.dataset.btn;
	// 	gsap.to(recipeData[btnNum], 1, {autoAlpha:1});
    //     // recipeData.classList.toggle("visible");
	// }

    // function hideRecipes(e) {
	// 	//console.log("hideInfo called")
	// 	let btnNum = e.currentTarget.dataset.btn;
	// 	gsap.to(recipeData[btnNum], 1, {autoAlpha: 0});
	// }

    // buttons.forEach(button => {
	// 	button.addEventListener("click", showRecipes);
	// 	button.addEventListener("click", hideRecipes);
	// });

    // photo gallery for landing section 

    (function gallery() {
		let count = 0;
		let img = ["brisket","chicken_platter","sausage"];

		const back = document.querySelector("#back");
		const frwd = document.querySelector("#frwd");
		let foodImg = document.querySelector("#galImage");

		    function frwdImg()	{
			count++;
				if (count == img.length) {
					count = 0;
				}		
				TweenMax.to(foodImg, 1, {autoAlpha:0, onComplete:done}); 
			}
		
			function backImg() {
				count--;
				if (count < 0) {
					count = img.length - 1;
				}	
				TweenMax.to(foodImg, 1, {autoAlpha:0, onComplete:done});
			}
		
			function done() {	
					let gallSrcset = 
					`images/${img[count]}.jpg`;
					let gallsSrc = `images/${img[count]}.jpg`;
					foodImg.src = gallsSrc;
					foodImg.srcset = gallSrcset;
					TweenMax.to(foodImg, 1, {autoAlpha:1}); 		
			}

		back.addEventListener("click", frwdImg, false); 
		frwd.addEventListener("click", backImg, false);

	})()





})();