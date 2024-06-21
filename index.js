var searchTrigger = document.getElementById("searchTrigger")
var menu = document.getElementById("menu")
var menuImg = document.getElementById("menuImg")
var menuDiv = document.getElementById("menuDiv")
var menuSpace = document.getElementById("closeMenuSpace")
var returnNav = document.getElementById("returnNav")
var searchInput = document.getElementById("searchInput")
var searchBtn = document.getElementById("searchBtn")
var searchDiv = document.getElementById("searchDiv")
var menuDropDown = document.getElementById("menuDropdown")
var menuTools = document.getElementById("menuTools")



function test(){
alert("hi")
}



searchTrigger.addEventListener("click", () => {
   openSearchDiv()
})

function openSearchDiv(){
    searchDiv.style.display = "flex"
    setTimeout(() => {
        searchInput.focus()
    }, 0.5);
}

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        searchFunc()
    }
})

returnNav.addEventListener("click", () => {
    searchDiv.style.display = "none"
})


searchBtn.addEventListener("click", searchFunc)

var menucount = 0;

menu.addEventListener("click", () => {

    if (menucount == 0) {
        openMenu()
    }

    else if (menucount == 1) {
        closeMenu()
    }

})

menuSpace.addEventListener("click", () => {
    closeMenu()
})

function openMenu() {
    menuDiv.style.display = "flex"
    menuImg.setAttribute("src", "./images/close x.svg")
    menucount = 1
}


function closeMenu() {
            menuDiv.style.display = "none"
        menuImg.setAttribute("src", "./images/menu icon.svg")
        menucount = 0
}

menuDropDown.addEventListener("click", menuDropDownFunc)

var i = 0

function menuDropDownFunc(){
    // var i = 0
    // alert("seen")

    if(i == 0){
        menuTools.style.height = "fit-content"
        menuTools
        i = 1
    }

    else if(i == 1){
        menuTools.style.height = "35px"
        i = 0
    }
}

function openMenuDropdown(){
}

function closeMenuDropdown(){
    toolslinks.style.height = "35px"
}


function searchFunc() {

}