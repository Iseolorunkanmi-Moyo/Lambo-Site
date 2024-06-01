var searchTrigger = document.getElementById("searchTrigger")
var menu = document.getElementById("menu")
var menuImg = document.getElementById("menuImg")
var menuDiv = document.getElementById("menuDiv")
var menuSpace = document.getElementById("closeMenuSpace")
var returnNav = document.getElementById("returnNav")
var searchInput = document.getElementById("searchInput")
var searchBtn = document.getElementById("searchBtn")
var searchDiv = document.getElementById("searchDiv")
var homeBtn = document.getElementById("homeBtn")
var updateBtn = document.getElementById("updateBtn")
var postBtn = document.getElementById("postBtn")
var profileBtn = document.getElementById("profileBtn")
var homeSection = document.getElementById("homeSection")
var updateSection = document.getElementById("updateSection")
var postSection = document.getElementById("postSection")
var profileSection = document.getElementById("profileSection")

homeBtn.addEventListener("click", showHomeSection)
updateBtn.addEventListener("click", showUpdateSection)
postBtn.addEventListener("click", showPostSection)
profileBtn.addEventListener("click", showProfileSection)

function test(){
alert("hi")
}

function showHomeSection(){
    homeSection.style.display = "flex"
    updateSection.style.display ="none"
    postSection.style.display = "none"
    profileSection.style.display = "none"
}

function showUpdateSection(){
    homeSection.style.display = "none"
    updateSection.style.display ="flex"
    postSection.style.display = "none"
    profileSection.style.display = "none"
}

function showPostSection(){
    homeSection.style.display = "none"
    updateSection.style.display ="none"
    postSection.style.display = "flex"
    profileSection.style.display = "none"
}

function showProfileSection(){
    homeSection.style.display = "none"
    updateSection.style.display ="none"
    postSection.style.display = "none"
    profileSection.style.display = "flex"
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