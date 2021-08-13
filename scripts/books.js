// ARRAY FOR STORING THE BOOKS FROM LOCAL STORAGE
let myBooks = [];

// GETTING ELEMENTS FROM DOM
const zeroBooksEl = document.getElementById("zero-books");
const ulEl = document.getElementById("ul-el");
const dltEl = document.getElementById("dlt-btn");
const addBookEl = document.getElementById("add-book")

/****************************** EVENT LISTNER***************************************/
addBookEl.addEventListener("click", function() {
    window.open('./index.html', '_self');
})

dltEl.addEventListener("click", function() {
    // CLEAR LOCAL STORAGE AND myBooks ARRAY
    localStorage.clear();
    myBooks = [];
    // CLEAN DOM
    location.reload();
})


/***************************** FUNCTIONS *****************************/
function fetchLocalStorage() {
    // FETCHING LOCAL STORAGE
    let fromLocalStorage = JSON.parse(localStorage.getItem("myBooks"));
    // IF WE GOT SOMETHING FROM LOCAL STORAGE WE ADD IT TO myBooks ARRAY
    if (fromLocalStorage) {
        myBooks = fromLocalStorage;
        // PRINTING RESULTS
        render(myBooks);
    }
}

function render(books) {
    let ulElItems = "";
    console.log(myBooks)
    zeroBooksEl.textContent = "";
    zeroBooksEl.style.margin = 0;
    for (let i=0, j=1; i < books.length-1; i=i+2, j=j+2)
    {
        console.log(myBooks[i], myBooks[j]);
        ulElItems += 
        `
            <li>
                <p class="book-name">Book:</p>
                <a href="https://libgen.me/search/all?search=' + ${myBooks[i]} + '&collection=all'" target="_blank">
                    ${myBooks[i]}
                </a>
                <p class="book-author">| Author:</p>
                <a href="https://www.google.com/search?q=' + ${myBooks[j]}" target="_blank">
                    ${myBooks[j]}
                </a>
            </li>
        ` 
    }
    ulEl.innerHTML = ulElItems;
}

fetchLocalStorage();