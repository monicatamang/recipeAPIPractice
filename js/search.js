function searchSuccess(res) {

    let searchMealsResults = res.data;
    let searchBar = document.getElementById(`searchBar`);

    for (let i = 0; i < searchMealsResults.meals.length; i++) {
        
        // p tag that contains the message of how many search results came up for the keyword that was searched
        document.getElementById(`numberOfResults`).innerText = `${searchMealsResults.meals.length} results for ${searchBar.value}`;
        
        // Container containing all search results
        let searchResultsContainer = document.getElementById(`searchResultsContainer`);

        // Container for each result
        let recipeCard = document.createElement(`article`);
        recipeCard.classList.add(`recipeCard`);
        recipeCard.style.display = `grid`;
        recipeCard.style.gridTemplateColumns = `auto auto`;

        let foodImage = document.createElement(`img`);
        foodImage.setAttribute(`src`, `${searchMealsResults.meals[i].strMealThumb}`);
        foodImage.style.width = `30vw`;
        recipeCard.append(foodImage);

        let groupTitleCategoryArea = document.createElement(`div`);
        groupTitleCategoryArea.innerHTML += `<h1>${searchMealsResults.meals[i].strMeal}</h1>
        <p>${searchMealsResults.meals[i].strCategory}</p>
        <p>${searchMealsResults.meals[i].strArea}</p>`;
        recipeCard.append(groupTitleCategoryArea);
        
        // let ingredientsAndMeasureContainer = document.createElement(`div`);
        // ingredientsAndMeasureContainer.classList.add(`ingredientsAndMeasure`);
        // ingredientsAndMeasureContainer.innerHTML += `<p>${searchMealsResults.meals[i].strIngredient1}</p>
        // <p>${searchMealsResults.meals[i].strIngredient2}</p>
        // <p>${searchMealsResults.meals[i].strIngredient3}</p>
        // <p>${searchMealsResults.meals[i].strIngredient4}</p>
        // <p>${searchMealsResults.meals[i].strIngredient5}</p>
        // <p>${searchMealsResults.meals[i].strIngredient6}</p>
        // <p>${searchMealsResults.meals[i].strIngredient7}</p>
        // <p>${searchMealsResults.meals[i].strIngredient8}</p>
        // <p>${searchMealsResults.meals[i].strIngredient9}</p>
        // <p>${searchMealsResults.meals[i].strIngredient10}</p>
        // <p>${searchMealsResults.meals[i].strIngredient11}</p>
        // <p>${searchMealsResults.meals[i].strIngredient12}</p>
        // <p>${searchMealsResults.meals[i].strIngredient13}</p>
        // <p>${searchMealsResults.meals[i].strIngredient14}</p>
        // <p>${searchMealsResults.meals[i].strIngredient15}</p>
        // <p>${searchMealsResults.meals[i].strIngredient16}</p>
        // <p>${searchMealsResults.meals[i].strIngredient17}</p>
        // <p>${searchMealsResults.meals[i].strIngredient18}</p>
        // <p>${searchMealsResults.meals[i].strIngredient19}</p>
        // <p>${searchMealsResults.meals[i].strIngredient20}</p>
        // <p>${searchMealsResults.meals[i].strMeasure1}</p>
        // <p>${searchMealsResults.meals[i].strMeasure2}</p>
        // <p>${searchMealsResults.meals[i].strMeasure3}</p>
        // <p>${searchMealsResults.meals[i].strMeasure4}</p>
        // <p>${searchMealsResults.meals[i].strMeasure5}</p>
        // <p>${searchMealsResults.meals[i].strMeasure6}</p>
        // <p>${searchMealsResults.meals[i].strMeasure7}</p>
        // <p>${searchMealsResults.meals[i].strMeasure8}</p>
        // <p>${searchMealsResults.meals[i].strMeasure9}</p>
        // <p>${searchMealsResults.meals[i].strMeasure10}</p>
        // <p>${searchMealsResults.meals[i].strMeasure11}</p>
        // <p>${searchMealsResults.meals[i].strMeasure12}</p>
        // <p>${searchMealsResults.meals[i].strMeasure13}</p>
        // <p>${searchMealsResults.meals[i].strMeasure14}</p>
        // <p>${searchMealsResults.meals[i].strMeasure15}</p>
        // <p>${searchMealsResults.meals[i].strMeasure16}</p>
        // <p>${searchMealsResults.meals[i].strMeasure17}</p>
        // <p>${searchMealsResults.meals[i].strMeasure18}</p>
        // <p>${searchMealsResults.meals[i].strMeasure19}</p>
        // <p>${searchMealsResults.meals[i].strMeasure20}</p>`;
        // recipeCard.append(ingredientsAndMeasureContainer);

        // let instructionsContainer = document.createElement(`div`);
        // instructionsContainer.classList.add(`instructions`);
        // instructionsContainer.innerHTML += `<p>${searchMealsResults.meals[i].strInstructions}</p>`;
        // recipeCard.append(instructionsContainer);

        searchResultsContainer.append(recipeCard);
    }
}

function searchFailure(err) {
    document.getElementById(`searchResults`).innerHTML = `<p>Sorry nothing found.</p>`;
}

function getSearchResults(e) {

    let searchBar = document.getElementById(`searchBar`);

    axios.request({
        method: `GET`,
        url: `https://www.themealdb.com/api/json/v1/1/search.php`,
        params: {
            s: searchBar.value
        }
    }).then(searchSuccess).catch(searchFailure);
}

let searchButton = document.getElementById(`searchButton`);
searchButton.addEventListener(`click`, getSearchResults);