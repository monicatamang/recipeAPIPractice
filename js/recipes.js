function mealGenerator(e) {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let mealsObject = JSON.parse(this.responseText);
            // console.log(mealObject);
            // console.log(mealsObject.meals[0]);
            let mealsTitle = mealsObject.meals[0].strMeal;
            let mealsCategory = mealsObject.meals[0].strCategory;
            let mealsArea = mealsObject.meals[0].strArea;
            let mealsInstructions = mealsObject.meals[0].strInstructions;
            let mealsImage = mealsObject.meals[0].strMealThumb;
            // let mealsObjectEntries = Object.entries(mealsObject.meals[0]);
            let randomMealsContainer = document.getElementById(`mealsGeneratorContainer`);
            // for (let i = 10; i < mealsObjectEntries.length - 3; i++) {
            //     for (let j = 0; j < 2; j++) {
            //         randomMealsContainer += mealsObjectEntries[i][j];
            //     }
            // }
            let mealsVideo = mealsObject.meals[0].strYoutube;
            randomMealsContainer += mealsTitle;
            randomMealsContainer += mealsCategory;
            randomMealsContainer += mealsArea;
            randomMealsContainer += mealsInstructions;
            randomMealsContainer += mealsImage;
            randomMealsContainer += mealsVideo;
            // let ingredient1 = mealObject[0].strIngredient1;
            // let measure1 = mealObject[0].strMeasure1;
            // let ingredient2 = mealObject[0].strIngredient2;
            // let measure2 = mealObject[0].strMeasure2;
            // let ingredient3 = mealObject[0].strIngredient3;
            // let measure3 = mealObject[0].strMeasure3;
            // let ingredient4 = mealObject[0].strIngredient4;
            // let measure4 = mealObject[0].strMeasure4;
            // let ingredient5 = mealObject[0].strIngredient5;
            // let measure5 = mealObject[0].strMeasure5;
            // let ingredient6 = mealObject[0].strIngredient6;
            // let measure6 = mealObject[0].strMeasure6;
            // let ingredient7 = mealObject[0].strIngredient7;
            // let measure7 = mealObject[0].strMeasure7;
            // let ingredient8 = mealObject[0].strIngredient8;
            // let measure8 = mealObject[0].strMeasure8;
            // let ingredient9 = mealObject[0].strIngredient9;
            // let measure9 = mealObject[0].strMeasure9;
            // let ingredient10 = mealObject[0].strIngredient10;
            // let measure10 = mealObject[0].strMeasure10;
            // let ingredient11 = mealObject[0].strIngredient11;
            // let measure11 = mealObject[0].strMeasure11;
            // let ingredient12 = mealObject[0].strIngredient12;
            // let measure12 = mealObject[0].strMeasure12;
            // let ingredient13 = mealObject[0].strIngredient13;
            // let measure13 = mealObject[0].strMeasure13;
            // let ingredient14 = mealObject[0].strIngredient14;
            // let measure14 = mealObject[0].strMeasure14;
            // let ingredient15 = mealObject[0].strIngredient15;
            // let measure15 = mealObject[0].strMeasure15;
            // let ingredient16 = mealObject[0].strIngredient16;
            // let measure16 = mealObject[0].strMeasure16;
            // let ingredient17 = mealObject[0].strIngredient17;
            // let measure17 = mealObject[0].strMeasure17;
            // let ingredient18 = mealObject[0].strIngredient18;
            // let measure18 = mealObject[0].strMeasure18;
            // let ingredient19 = mealObject[0].strIngredient19;
            // let measure19 = mealObject[0].strMeasure19;
            // let ingredient20 = mealObject[0].strIngredient20;
            // let measure20 = mealObject[0].strMeasure20;
            // let mealVideo = mealObject[0].strYoutube;
            // document.getElementById(`mealGeneratorContainer`) += mealTitle;
            // document.getElementById(`mealGeneratorContainer`) += mealCategory;
            // document.getElementById(`mealGeneratorContainer`) += mealArea;
            // document.getElementById(`mealGeneratorContainer`) += mealInstructions;
            // document.getElementById(`mealGeneratorContainer`) += mealImage;
            // document.getElementById(`mealGeneratorContainer`) += mealVideo;
        }
    }

    ajax.open(`GET`, `https://www.themealdb.com/api/json/v1/1/random.php`, true);

    ajax.send();
}

let mealGeneratorButton = document.querySelector(`button`);
mealGeneratorButton.addEventListener(`click`, mealGenerator);

let userName = Cookies.get(`Recipe API First Name`);
let greetingMessage = `What are we cooking today, ${userName}?`;
document.getElementById(`greetingMessage`).innerText = greetingMessage;