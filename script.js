// This code shows or hides the fun fact when the button is clicked.

const button = document.getElementById("funFactBtn");
const funFact = document.getElementById("funFact");

button.addEventListener("click", function () {
    if (funFact.style.display === "none") {
        funFact.style.display = "block";
        button.textContent = "Hide Fun Fact";
    } else {
        funFact.style.display = "none";
        button.textContent = "Show Fun Fact";
    }
});