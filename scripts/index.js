// SETTING ARRAY FOR STORING BOOKS
let myBooks = [];

// GETTING THE ELEMENTS FROM THE DOM
const inputBookTitleEl = document.getElementById("input-book-title");
const inputBookAuthorEl = document.getElementById("input-book-author");
const submitBtnEl = document.getElementById("input-submit");
const temp = document.getElementById("temp");
const introBooksSection = document.getElementById("intro_books");
const searchBookBtn = document.getElementById("search-book");
const yourBooksEl = document.getElementById("your-books");

/******************************** EVENT LISTNERS ************************************/
submitBtnEl.addEventListener("click", function() {
    if (inputBookTitleEl.value === ""){
        inputBookTitleEl.value = "No Book title";
    }
    else if (inputBookAuthorEl.value === ""){
        inputBookAuthorEl.value = "No Author";
    }
    checkInputsValue();
})

searchBookBtn.addEventListener("click", function() {
    if (inputBookTitleEl.value === "" && inputBookAuthorEl.value === "")
        alert("Please fill the 2 fields before submiting!");
    else {
        window.open('https://libgen.me/search/all?search='+ inputBookTitleEl.value + ' ' + inputBookAuthorEl.value + '&collection=all');
        if (inputBookTitleEl.value === ""){
            inputBookTitleEl.value = "No Book title";
        }
        else if (inputBookAuthorEl.value === ""){
            inputBookAuthorEl.value = "No Author";
        }
        setItemInLocalStorage();
    }
})

yourBooksEl.addEventListener("click", function(){
    window.open('./books.html', '_self');
})

/********************************** FUNCTIONS ***************************************/
// CHECKING IF THERE IS ANY INPUTS BY THE USER, IF TRUE WE SHOULD STORE IT IN LOCAL STORAGE
function checkInputsValue() {
    if (inputBookTitleEl.value === "" && inputBookAuthorEl.value === "")
        alert("Please fill the 2 fields before submiting!");
    else {
        setItemInLocalStorage();
    }
}

// STORING USER INPUTS IN LOCAL STORAGE
function setItemInLocalStorage() {
    // STRORING INFOS IN myBooks ARRAY
    myBooks.push(inputBookTitleEl.value);
    myBooks.push(inputBookAuthorEl.value);
    inputBookTitleEl.value = "";
    inputBookAuthorEl.value = "";

    // STRORING INFOS IN LOCAL STORAGE
    localStorage.setItem("myBooks", JSON.stringify(myBooks));
}

// FETCHING LOCAL STORAGE TO GET USER INPUTS
function fetchLocalStorage() {
    // FETCHING LOCAL STORAGE
    let fromLocalStorage = JSON.parse(localStorage.getItem("myBooks"));
    // IF WE GOT SOMETHING FROM LOCAL STORAGE WE ADD IT TO myBooks ARRAY
    if (fromLocalStorage) {
        myBooks = fromLocalStorage;
    }
}

fetchLocalStorage();
