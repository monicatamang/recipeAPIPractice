function mealGenerator(e) {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let mealsObject = JSON.parse(this.responseText);
            let mealsTitle = mealsObject.meals[0].strMeal;
            let mealsCategory = mealsObject.meals[0].strCategory;
            let mealsArea = mealsObject.meals[0].strArea;
            let mealsImage = mealsObject.meals[0].strMealThumb;
            let mealsVideo = mealsObject.meals[0].strYoutube;
            let ingredient1 = mealsObject.meals[0].strIngredient1;
            let ingredient2 = mealsObject.meals[0].strIngredient2;
            let ingredient3 = mealsObject.meals[0].strIngredient3;
            let ingredient4 = mealsObject.meals[0].strIngredient4;
            let ingredient5 = mealsObject.meals[0].strIngredient5;
            let ingredient6 = mealsObject.meals[0].strIngredient6;
            let ingredient7 = mealsObject.meals[0].strIngredient7;
            let ingredient8 = mealsObject.meals[0].strIngredient8;
            let ingredient9 = mealsObject.meals[0].strIngredient9;
            let ingredient10 = mealsObject.meals[0].strIngredient10;
            let ingredient11 = mealsObject.meals[0].strIngredient11;
            let ingredient12 = mealsObject.meals[0].strIngredient12;
            let ingredient13 = mealsObject.meals[0].strIngredient13;
            let ingredient14 = mealsObject.meals[0].strIngredient14;
            let ingredient15 = mealsObject.meals[0].strIngredient15;
            let ingredient16 = mealsObject.meals[0].strIngredient16;
            let ingredient17 = mealsObject.meals[0].strIngredient17;
            let ingredient18 = mealsObject.meals[0].strIngredient18;
            let ingredient19 = mealsObject.meals[0].strIngredient19;
            let ingredient20 = mealsObject.meals[0].strIngredient20;
            let measure1 = mealsObject.meals[0].strMeasure1;
            let measure2 = mealsObject.meals[0].strMeasure2;
            let measure3 = mealsObject.meals[0].strMeasure3;
            let measure4 = mealsObject.meals[0].strMeasure4;
            let measure5 = mealsObject.meals[0].strMeasure5;
            let measure6 = mealsObject.meals[0].strMeasure6;
            let measure7 = mealsObject.meals[0].strMeasure7;
            let measure8 = mealsObject.meals[0].strMeasure8;
            let measure9 = mealsObject.meals[0].strMeasure9;
            let measure10 = mealsObject.meals[0].strMeasure10;
            let measure11 = mealsObject.meals[0].strMeasure11;
            let measure12 = mealsObject.meals[0].strMeasure12;
            let measure13 = mealsObject.meals[0].strMeasure13;
            let measure14 = mealsObject.meals[0].strMeasure14;
            let measure15 = mealsObject.meals[0].strMeasure15;
            let measure16 = mealsObject.meals[0].strMeasure16;
            let measure17 = mealsObject.meals[0].strMeasure17;
            let measure18 = mealsObject.meals[0].strMeasure18;
            let measure19 = mealsObject.meals[0].strMeasure19;
            let measure20 = mealsObject.meals[0].strMeasure20;
            let mealsInstructions = mealsObject.meals[0].strInstructions;
            document.getElementById(`mealsTitle`).innerText = mealsTitle;
            document.getElementById(`mealsCategory`).innerText = mealsCategory;
            document.getElementById(`mealsArea`).innerText = mealsArea;
            document.getElementById(`mealsImageContainer`).innerHTML = `<img src="${mealsImage}">`;
            document.getElementById(`ingredient1`).innerText = ingredient1;
            document.getElementById(`ingredient2`).innerText = ingredient2;
            document.getElementById(`ingredient3`).innerText = ingredient3;
            document.getElementById(`ingredient4`).innerText = ingredient4;
            document.getElementById(`ingredient5`).innerText = ingredient5;
            document.getElementById(`ingredient6`).innerText = ingredient6;
            document.getElementById(`ingredient7`).innerText = ingredient7;
            document.getElementById(`ingredient8`).innerText = ingredient8;
            document.getElementById(`ingredient9`).innerText = ingredient9;
            document.getElementById(`ingredient10`).innerText = ingredient10;
            document.getElementById(`ingredient11`).innerText = ingredient11;
            document.getElementById(`ingredient12`).innerText = ingredient12;
            document.getElementById(`ingredient13`).innerText = ingredient13;
            document.getElementById(`ingredient14`).innerText = ingredient14;
            document.getElementById(`ingredient15`).innerText = ingredient15;
            document.getElementById(`ingredient16`).innerText = ingredient16;
            document.getElementById(`ingredient17`).innerText = ingredient17;
            document.getElementById(`ingredient18`).innerText = ingredient18;
            document.getElementById(`ingredient19`).innerText = ingredient19;
            document.getElementById(`ingredient20`).innerText = ingredient20;
            document.getElementById(`measure1`).innerText = measure1;
            document.getElementById(`measure2`).innerText = measure2;
            document.getElementById(`measure3`).innerText = measure3;
            document.getElementById(`measure4`).innerText = measure4;
            document.getElementById(`measure5`).innerText = measure5;
            document.getElementById(`measure6`).innerText = measure6;
            document.getElementById(`measure7`).innerText = measure7;
            document.getElementById(`measure8`).innerText = measure8;
            document.getElementById(`measure9`).innerText = measure9;
            document.getElementById(`measure10`).innerText = measure10;
            document.getElementById(`measure11`).innerText = measure11;
            document.getElementById(`measure12`).innerText = measure12;
            document.getElementById(`measure13`).innerText = measure13;
            document.getElementById(`measure14`).innerText = measure14;
            document.getElementById(`measure15`).innerText = measure15;
            document.getElementById(`measure16`).innerText = measure16;
            document.getElementById(`measure17`).innerText = measure17;
            document.getElementById(`measure18`).innerText = measure18;
            document.getElementById(`measure19`).innerText = measure19;
            document.getElementById(`measure20`).innerText = measure20;
            document.getElementById(`mealsInstructions`).innerText = mealsInstructions;
            document.getElementById(`mealsVideo`).innerHTML = `<a href="${mealsVideo}">Click Here to Watch a Video Tutorial</a>`;
        }
    }

    ajax.open(`GET`, `https://www.themealdb.com/api/json/v1/1/random.php`, true);

    ajax.send();
}

let mealsIngredients = document.getElementById(`mealsIngredientsContainer`);
let mealGeneratorButton = document.querySelector(`button`);
mealGeneratorButton.addEventListener(`click`, mealGenerator);

let userName = Cookies.get(`Recipe API First Name`);
let greetingMessage = `What are we cooking today, ${userName}?`;
document.getElementById(`greetingMessage`).innerText = greetingMessage;