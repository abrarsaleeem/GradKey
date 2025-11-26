let button1 = document.getElementById("leftBtn");
let button2 = document.getElementById("rightBtn");
let gradDisplay = document.getElementById("displayGrad");
let copyBox = document.querySelector(".copyCode");
let copyBoxText = document.getElementById("copyText");
// Mobile Menu Get Elements
let mobileMenu = document.getElementById("mobileMenu");
let menuIcon = document.getElementById("menuIcon");
let closeMenu = document.getElementById("closeMenu");
let overlay = document.getElementById("overlay");
// Save Gradient in LocalStorage
let favIcon = document.getElementById("savedIcon");

let hexValues = () => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for(let i = 0; i < 6; i++){
        colors = `${colors}${myHexValues[Math.floor(Math.random() * 16)]}`;
    }
    return colors;
};

let rgb1 = "#0a7a63";
let rgb2 = "#9b0f12";

const handleButton1 = () => {
    rgb1 = hexValues();
    button1.innerText = rgb1;
    copyBoxText.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    gradDisplay.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
    rgb2 = hexValues();
    button2.innerText = rgb2;
    copyBoxText.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    gradDisplay.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleCopyBox = () => {
    navigator.clipboard.writeText(copyBoxText.innerText);

    copyBoxText.innerText = "Copied!";
    copyBox.style.boxShadow = "0 0 4px #9f9d9dff";
    copyBox.style.color = "lime";

    setTimeout(() => {
        copyBoxText.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        copyBox.style.color = "#f1f1f1";
        copyBox.style.boxShadow = "none";
    }, 1200);
};

button1.addEventListener('click', handleButton1);
button2.addEventListener('click', handleButton2);
copyBox.addEventListener('click', handleCopyBox);
// Open Menu
menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
});
// Close Menu
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});
// Saved to localStorage
favIcon.addEventListener("click", () => {
    let currentGradient = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    let savedGradient = JSON.parse(localStorage.getItem("gradient")) || [];
    if(!savedGradient.includes(currentGradient)){
        savedGradient.push(currentGradient);
        localStorage.setItem("gradient", JSON.stringify(savedGradient));
    }
})