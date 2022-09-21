const searchIcon = document.querySelector(".input-container span");

const searchBar = document.querySelector("input#search");


searchIcon.addEventListener("click", () => {
    searchBar.focus();
});