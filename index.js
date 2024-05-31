var searchTrigger = document.getElementById("searchTrigger")
var menu = document.getElementById("menu")
var menuDiv = document.getElementById("menuDiv")
var returnNav = document.getElementById("returnNav")
var searchInput = document.getElementById("searchInput")
var searchBtn = document.getElementById("searchBtn")
var searchDiv = document.getElementById("searchDiv")

searchTrigger.addEventListener("click", () => {
    searchDiv.style.display = "flex"
    setTimeout(() => {
        searchInput.focus()
    }, 0.5);
})

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


function searchFunc() {

}

menu.addEventListener("click", () => {

    if (menuDiv.style.display = "none") {
        menuDiv.style.animationName = "menuSlide"
        menuDiv.style.animationDuration = "1s"
        menuDiv.style.display = "flex"
    }

   else if (menuDiv.style.display = "flex") {
        menuDiv.style.animationName = "reverseMenuSlide"
        menuDiv.style.animationDuration = "1s"
        setTimeout(() => {
            menuDiv.style.display = "none"

        }, 1000);
    }


})


menuDiv.addEventListener("click", () => {
    menuDiv.style.animationName = "reverseMenuSlide"
    menuDiv.style.animationDuration = "1s"
    setTimeout(() => {
        menuDiv.style.display = "none"

    }, 1000);

})
