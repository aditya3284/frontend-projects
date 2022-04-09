const ratingCard = document.querySelectorAll(".rating-card")
const thankCard = document.querySelectorAll(".thank-card")
const submitBtn = document.querySelectorAll(".submit-btn")
const ratingBtn = document.querySelectorAll(".ratings")
const selectedRating = document.querySelector("#select-rating")

submitBtn[0].addEventListener("click", function (event) {
	ratingCard[0].style.display = "none"
	thankCard[0].style.display = "block"
})

for (let i = 0; i < ratingBtn.length; i++) {
	ratingBtn[i].addEventListener("click", function (event) {
		selectedRating.textContent = ratingBtn[i].getAttribute("data-rate")
	})
}
 