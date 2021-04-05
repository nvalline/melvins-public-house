const mobileBars = document.getElementById("mobileBars");

// Toggle Mobile Nav
function showNav() {
    console.log("HIT")
    document.getElementById("mobileNav").classList.toggle("hide")
}

mobileBars.addEventListener("click", showNav);