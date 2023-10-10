let icons = document.querySelectorAll(".icon")

// animação de click
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.preventDefault()

    icon.style.animation = "clickAnimation 0.5s ease-in-out infinite alternate"

    setTimeout(() => {
      icon.style.animation = "none"
    }, 1000)
  })
})
