// Hamburger Menu
const element = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

element.addEventListener('click', () => {
    element.classList.toggle('active');
    navList.classList.toggle('active');
})

// Dark Mode
let darkMode = localStorage.getItem("darkMode");

const darkModeActive = () => {
    document.querySelector(".btn-background").classList.add("color")
    document.querySelector(".home-button").classList.add("color")
    document.querySelector("main").classList.add("color")
    // document.querySelector(".intro").classList.add("color")
    // document.querySelector(".category-color").classList.add("color")
    document.querySelector(".popular-color").classList.add("color")
    document.querySelector(".popular-search-btn").classList.add("color")


    document.querySelector(".btn-face").classList.add("move")
    document.querySelector(".btn-eye-left  ").classList.add("close")
    document.querySelector(".btn-eye-right").classList.add("close")
    document.querySelector(".btn-mouth").classList.add("close")
}

const darkModeInActive = () => {
    document.querySelector(".btn-background").classList.remove("color")
    document.querySelector(".home-button").classList.remove("color")
    document.querySelector("main").classList.remove("color")
    // document.querySelector(".intro").classList.remove("color")
    // document.querySelector(".category-color").classList.remove("color")
    document.querySelector(".popular-color").classList.remove("color")
    document.querySelector(".popular-search-btn").classList.remove("color")


    document.querySelector(".btn-face").classList.remove("move")
    document.querySelector(".btn-eye-left  ").classList.remove("close")
    document.querySelector(".btn-eye-right").classList.remove("close")
    document.querySelector(".btn-mouth").classList.remove("close")
}

const enableDarkMode = () => {
    darkModeActive();

    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    darkModeInActive();

    localStorage.setItem("darkMode", "disabled");
}

if (darkMode === "enabled") {
    enableDarkMode();
}

document.querySelector(".btn-background").addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();

        console.log(darkMode)
    } else {
        disableDarkMode();

        console.log(darkMode)
    }
})