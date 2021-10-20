async function makeAPIRequest(url){
    let res = await fetch(url); 
    let data = await res.json();
    console.log(data);
    if(data.recipes !== undefined){
        return data.recipes;
    }
    // if(data.recipes === undefined){
    //     console.log(data.results);
    //     return data.results;
    // }
    if(data.meals !== undefined){
        return data.meals;
    }
}

function onPageLoad(parrent){
    let data = makeAPIRequest('https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=dd3752c098a44e7eabefd296c77c0fc5');

    data.then((res) => {
        let parrent = document.getElementById('popularMeals');
        appendData(res, parrent);
    })
    .catch((error) => {
        console.log(error);
    })
}

function appendData(data, parrent){

    data.forEach(({image, title, dishTypes, pricePerServing}) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'onLoadResutl');
        
        let img = document.createElement('img');
        img.src = image;

        let titleName = document.createElement('h4');
        titleName.textContent = title;

        let typeDish = document.createElement('p');
        typeDish.textContent = dishTypes[0];

        let price = document.createElement('p');
        price.textContent = pricePerServing + " INR";

        div.append(img, titleName, typeDish, price);

        parrent.append(div);
    });
}

let timeOut = false;
function searchKeyword(d){
    let keyword = document.getElementById("keyword").value;
    let search = document.getElementById("search");

    if(timeOut){
        clearTimeout(timeOut);
    }
    if(keyword.length < 1){
        search.style.display = 'none';
        return false;
    }
    timeOut = setTimeout( () =>{
        makeAPIRequest(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then( (res) => {
            console.log(res);
            showSearchResult(search, res);
        })
        .catch( (error) => {
            console.log(error);
        })
    },2000)
}

function showSearchResult(search, data){
    let parrent = document.getElementById("popularMeals");
    search.innerHTML = null;
    search.style.display = 'flex';

    data.forEach(({strMeal, strMealThumb}, el) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'searchBox');
        div.onclick = () => {
            appendResultIntoBodySingle(data[el], parrent, search);
        }
        
        let img = document.createElement('img');
        img.src = strMealThumb;

        let titleName = document.createElement('h4');
        titleName.textContent = strMeal;

        div.append(img, titleName);

        search.append(div);
    });
}

function appendResultIntoBody(data, parrent, search){
    search.style.display = 'none';
    parrent.innerHTML = null;
    parrent.style.display = 'flex';

    data.forEach(({strMealThumb, strMeal, strArea, strCategory, strInstructions, strYoutube}) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'appendSearchBox');

        let a = document.createElement('a');
        a.href = strYoutube;
        
        let img = document.createElement('img');
        img.src = strMealThumb;

        let titleName = document.createElement('h3');
        titleName.textContent = strMeal;

        let area = document.createElement('h4');
        area.textContent = 'Food Origin: ' + strArea;

        let cate = document.createElement('h4');
        cate.textContent = 'Food Category: ' + strCategory;

        let disc = document.createElement('p');
        disc.textContent = strInstructions;

        a.append(img, titleName, area, cate, disc);

        div.append(a);

        parrent.append(div);
    })
}

function appendResultIntoBodySingle(data, parrent, search){
    search.style.display = 'none';
    parrent.innerHTML = null;
    parrent.style.display = 'flex';
    parrent.style.width = '80%';

        let div = document.createElement('div');
        div.setAttribute('class', 'appendSearchBox');

        let a = document.createElement('a');
        a.href = data.strYoutube;
        
        let img = document.createElement('img');
        img.src = data.strMealThumb;

        let titleName = document.createElement('h3');
        titleName.textContent = data.strMeal;

        let area = document.createElement('h4');
        area.textContent = 'Food Origin: ' + data.strArea;

        let cate = document.createElement('h4');
        cate.textContent = 'Food Category: ' + data.strCategory;

        let disc = document.createElement('p');
        disc.textContent = data.strInstructions;
        a.append(img, titleName, area, cate, disc);

        div.append(a);

        parrent.append(div);
}

function clickButton(){
    let keyword = document.getElementById("keyword").value;
    let search = document.getElementById("search");
    let parrent = document.getElementById("popularMeals");
    makeAPIRequest(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then( (res) => {
        appendResultIntoBody(res, parrent, search);
    })
    .catch( (error) => {
        console.log(error);
    })
}

export {onPageLoad, searchKeyword, clickButton};