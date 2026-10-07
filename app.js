const form = document.querySelector(".card-rating");
const cardThankyou = document.querySelector(".card-thankyou");
const scoreSpan = document.querySelector(".chose span");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const radio = document.querySelector("[name=rating]:checked");

    if (radio) {
        scoreSpan.textContent = radio.value;

        form.classList.add("hidden");
        cardThankyou.classList.remove("hidden");
    }
})