// Showing meals menue
function showMeal(){
    const foodName = document.getElementById("typed-food").value

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => {
        displayMeals(data.meals);
    })
}

const displayMeals = meals => {
    const divMealSite = document.getElementById("food-container");
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
            <button onclick = "displayMealsIngredient('${meal.idMeal}')">Detail</button>
            <img src= "${meal.strMealThumb}">
            <h2 class = "food-title">${meal.strMeal}</h2>
            `;
        mealDiv.innerHTML = mealInfo;
        divMealSite.appendChild(mealDiv);
    });
}

// Showing meals ingredient
const displayMealsIngredient = idMeal => {  
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data =>renderMealIngredient(data.meals[0]) )
}

const renderMealIngredient = meal =>{
    const mealDetailList = document.getElementById('food-item-detail');
    mealDetailList.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src= "${meal.strMealThumb}">
    <h2>Ingredient list</h2>
    <h5>${meal.strIngredient1}</h5>
    <h5>${meal.strIngredient2}</h5>
    <h5>${meal.strIngredient3}</h5>
    <h5>${meal.strIngredient4}</h5>
    <h5>${meal.strIngredient5}</h5>
    <h5>${meal.strIngredient6}</h5>
    `
}




   

