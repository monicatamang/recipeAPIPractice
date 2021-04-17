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

        let foodImage = document.createElement(`img`);
        foodImage.setAttribute(`src`, `${searchMealsResults.meals[i].strMealThumb}`);
        recipeCard.append(foodImage);

        recipeCard.innerHTML += `<h1>${searchMealsResults.meals[i].strMeal}</h1>
        <p>${searchMealsResults.meals[i].strCategory}</p>
        <p>${searchMealsResults.meals[i].strArea}</p>`;
        
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

function enterfocusSearchBar(e) {
    document.getElementById(`categoriesContainer`).style.display = `none`;
    // document.getElementById(`searchByKeyword`).style.display = `grid`;
}

function exitfocusSearchBar(e) {
    document.getElementById(`categoriesContainer`).style.display = `block`;
}

let searchButton = document.getElementById(`searchButton`);
searchButton.addEventListener(`click`, getSearchResults);

let searchBar = document.getElementById(`searchBar`);
searchBar.addEventListener(`focusin`, enterfocusSearchBar);
searchBar.addEventListener(`focusout`, exitfocusSearchBar);

// STEP 2   
function showAllItemsSuccess(res) {

}

function showAllItemsFailure(err) {

}

function showAllItems(e) {
    axios.request({
        method: `GET`,
        url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
        params: {
            c: `Beef`
        }
    }).then(showAllItemsSuccess).catch(showAllItemsFailure);
}

function showCategoriesFailure(err) {
    document.getElementById(`categoriesStatus`).innerHTML = `<p>Sorry something went wrong.</p>`;
}

function showCategoriesSuccess(res) {

    let categories = res.data.categories;

    document.getElementById(`searchByKeyword`).style.display = `none`;

    for (let i = 0; i < categories.length; i++) {

        let category = categories[i].strCategory;
        let image = categories[i].strCategoryThumb;
        let description = categories[i].strCategoryDescription;

        // PUTTING THE ONCLICK FUNCTION FOR STEP 3
        document.getElementById(`categoriesContainer`).innerHTML += `<article class="categoriesCard" onclick="()">
        <h1>${category}</h1>
        <img src="${image}">
        <p>${description}</p>
        </article>`;
    }
}

function showCategories(e) {

    axios.request({
        method: `GET`,
        url: `https://www.themealdb.com/api/json/v1/1/categories.php`,
    }).then(showCategoriesSuccess).catch(showCategoriesFailure);
}

window.addEventListener(`load`, showCategories);