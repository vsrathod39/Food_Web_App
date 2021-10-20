async function makeAPIRequest(url){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.recipes);
    return data.recipes;
}

function appendData(data, parrent){

    data.forEach(({image, title, dishTypes, pricePerServing}) => {
        let div = document.createElement('div');
        
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
function searchKeyword(){

    console.log("hi");
    return 0 ;

    // if(timeOut){
    //     clearTimeout(timeOut);
    // }

    // timeOut = setTimeout( () => {
    //     console.log(query);
    // }, delay)

}

export {makeAPIRequest, appendData, searchKeyword};