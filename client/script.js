
const header = document.getElementById("header");
const main = document.getElementById("main");
const generatorBtn = document.getElementById("generatorBtn");


function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


function getRecipe() {
    let index = getRandom(0, recipeList.length());
    var recipe = recipeList[index];
    showRecipe(currentRecipe);
    if( main.style.backgroundColor == "green") {
        main.style.backgroundColor = "red";
    } else {
    main.style.backgroundColor = "green";
    }
     
}


