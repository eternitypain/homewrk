const btn = document.querySelector(".btn")


    btn.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("red")
        console.log(event.target)
    })
