function searchByKeyword(e) {

    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        
        if(this.readyState === 4 && this.status === 200) {

            let searchObject = JSON.parse(this.responseText);
            console.log(searchObject.meals.length);
            console.log(searchObject.meals);

            for (let i = 0; i < searchObject.meals; i++) {
                console.log(recipeCard);
                
                // let numberOfResults = recipeCard.meals.length;
                // console.log(numberOfResults);

                let recipeCard = document.createElement(`div`);
                let mealTitle = `<h1>${searchObject.meals[i].strMeal}</h1>`;
                let category = `<p>${searchObject.meals[i].strCategory}</p>`;
                let area = `<p>${searchObject.meals[i].strArea}</p>`;
                let mealImage = `<img src="${searchObject.meals[i].strMealThumb}">`;
                let instructions = `<p>${searchObject.meals[i].strInstructions}</p>`;

                recipeCard.innerHTML += mealTitle;
                recipeCard.innerHTML += category;
                recipeCard.innerHTML += area;
                recipeCard.innerHTML += mealImage;
                recipeCard.innerHTML += instructions;

                let searchResultsContainer = document.getElementById(`searchResultsContainer`);
                searchResultsContainer.append(recipeCard);

                // let statusMessage = document.getElementById(`statusMessage`);
                // statusMessage.innerText = `${numberOfResults} Results`;
                // ***Add "You have searched for {}";
            }
        } else if (this.readyState !== 4) {
            let statusMessage = document.getElementById(`statusMessage`);
            statusMessage.innerText = `Loading...`;
        } else if (this.readyState === 4 && this.status !== 200) {
            let statusMessage = document.getElementById(`statusMessage`);
            statusMessage.innerText = `Sorry, nothing found.`;
        }
    }

    let keyword = document.getElementById(`searchBar`).value;
    ajax.open(`GET`, `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`, true);

    ajax.send();
}


let searchButton = document.getElementById(`searchButton`);
searchButton.addEventListener(`click`, searchByKeyword);