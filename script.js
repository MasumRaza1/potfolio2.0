const darkModeToggle = document.getElementById("dark-mode-toggle");
const container = document.querySelector("body");

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        container.classList.add("dark-mode");
    } else {
        container.classList.remove("dark-mode");
    }
});
