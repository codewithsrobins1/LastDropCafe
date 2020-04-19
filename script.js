//Function Expressions to select elements
const selectElement = (s) => document.querySelector(s);

//Open the Menu on Click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-links').classList.add('active')
});

//Close the Menu on Click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-links').classList.remove('active')
});

//Close the Menu After Click Nav Link
selectElement('.links').addEventListener('click', () => {
    selectElement('.nav-links').classList.remove('active')
});

//Open Menu
const menu = document.querySelector("#menuBtn");

function openMenu(){
    window.open("menu.pdf")
}

menu.addEventListener('click', openMenu);