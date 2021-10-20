function navigation(){
    return `<span>
            <input type="text" id="keyword" placeholder="Enter keyword to search...">
            <button id="searchButton">search</button>
        </span>
        <!-- <a href="index.html">Search Receipe</a> -->
        <a href="receipeOfTheDay.html">Receipe of The Day</a>
        <a href="latestReceipe.html">Latest Receipe</a>`
}

function htmlStruct(){
    return `<nav id="navCont">

    </nav>
    <div id="search">

    </div>
    <div id="popularMeals">

    </div>`
}

export {htmlStruct, navigation};