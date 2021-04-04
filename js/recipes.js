function mealGenerator(e) {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let mealsObject = JSON.parse(this.responseText);
            let mealsTitle = mealsObject.meals[0].strMeal;
            let mealsCategory = mealsObject.meals[0].strCategory;
            let mealsArea = mealsObject.meals[0].strArea;
            let mealsImage = mealsObject.meals[0].strMealThumb;
            let mealsInstructions = mealsObject.meals[0].strInstructions;
            let mealsVideo = mealsObject.meals[0].strYoutube;
            // let mealsIngredients = document.getElementById(`mealsIngredientsContainer`);
            document.getElementById(`mealsTitle`).innerText = mealsTitle;
            document.getElementById(`mealsCategory`).innerText = mealsCategory;
            document.getElementById(`mealsArea`).innerText = mealsArea;
            document.getElementById(`mealsImageContainer`).innerHTML = `<img src="${mealsImage}">`;
            document.getElementById(`mealsInstructions`).innerText = mealsInstructions;
            document.getElementById(`mealsVideo`).innerHTML = `<a href="${mealsVideo}">Click Here to Watch a Video Tutorial</a>`;
            // let mealsObjectValues = Object.values(mealsObject.meals[0]);
            // for (let i = 9; i < mealsObjectValues.length - 4; i++) {
            //     let mealsValue = `<p>${mealsObjectValues[i]}</p>`;
            //     mealsIngredients.innerHTML += mealsValue;
            // }
            // let mealsObjectEntries = Object.entries(mealsObject.meals[0]);
            // for (let i = 9; i < mealsObjectEntries.length - 4; i++) {
            //     for (let j = 0; j < 2; j++) {
            //         console.log(mealsObjectEntries[i][j]);
            //         mealsIngredients.append(mealsObjectEntries[i][j]);
            //     }
            // }
        }
    }

    ajax.open(`GET`, `https://www.themealdb.com/api/json/v1/1/random.php`, true);

    ajax.send();
}

let mealsIngredients = document.getElementById(`mealsIngredientsContainer`);
// mealsIngredients.style.display = `none`;
let mealGeneratorButton = document.querySelector(`button`);
mealGeneratorButton.addEventListener(`click`, mealGenerator);

let userName = Cookies.get(`Recipe API First Name`);
let greetingMessage = `What are we cooking today, ${userName}?`;
document.getElementById(`greetingMessage`).innerText = greetingMessage;