const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function() {
        const courseId = card.getAttribute("id")
         window.location.href = `/course/${courseId}`
    })
}
