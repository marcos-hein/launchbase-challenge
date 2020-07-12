const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function() {
        const classId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${classId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize").addEventListener("click", function() {
    if (modal.classList.contains("maximize-modal")) {
        modal.classList.remove("maximize-modal")

        document.querySelector("#fullscreen").textContent = "fullscreen"
    } else {
        modal.classList.add("maximize-modal")

        document.querySelector("#fullscreen").textContent = "fullscreen_exit"
    }
})
