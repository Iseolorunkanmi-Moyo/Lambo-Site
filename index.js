var searchTrigger = document.getElementById("searchTrigger")
var menu = document.getElementById("menu")
var menuImg = document.getElementById("menuImg")
var menuDiv = document.getElementById("menuDiv")
var menuSpace = document.getElementById("closeMenuSpace")
var returnNav = document.getElementById("returnNav")
var searchInput = document.getElementById("searchInput")
var searchBtn = document.getElementById("searchBtn")
var searchDiv = document.getElementById("searchDiv")

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
    menuDiv.style.animationName = "menuSlide"
    menuDiv.style.animationDuration = "1s"
    menuDiv.style.display = "flex"
    menuImg.setAttribute("src", "./close x.svg")
    menucount = 1
}

function closeMenu() {
    menuDiv.style.animationName = "reverseMenuSlide"
    menuDiv.style.animationDuration = "1s"
    setTimeout(() => {
        menuDiv.style.display = "none"
        menuImg.setAttribute("src", "./menu icon.svg")
        menucount = 0

    }, 950);
}


function searchFunc() {

}