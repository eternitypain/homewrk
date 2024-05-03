const btnsWrapper = document.querySelector(".btns")

btnsWrapper.addEventListener("click", event => {
    const target = event.target

    if(target && target.classList.contains("btn")) {
        console.log(target.textContent)
    }
})