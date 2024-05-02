const btn = document.querySelector(".btn")
const text = document.querySelector(".text")

btn.addEventListener("click", () => {
    text.classList.toggle("move")
    if (text.classList.contains("move")) {
        text.textContent = "ya dvigaus"
    } else {
        text.innerText = "Text"
    }
})

