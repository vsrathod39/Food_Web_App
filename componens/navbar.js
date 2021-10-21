function navigation(){
    return `<a href="./index.html">Home</a>
        <span>
            <input type="text" id="keyword" placeholder="Enter keyword to search...">
            <button id="searchButton">search</button>
        </span>
        <a href="./receipeOfTheDay.html">Receipe of The Day</a>
        <a href="./latestReceipe.html">Latest Receipe</a>`
}

function htmlStruct(){
    return `<nav id="navCont">

    </nav>
    <div id="search">

    </div>
    <div id="heading">

    </div>
    <div id="popularMeals">

    </div>`
}

export {htmlStruct, navigation};