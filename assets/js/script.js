const $questions = document.querySelectorAll(".card_question");

$questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");

        /* const answer = btnPlus.nextElementSibling;
        answer.classList.toggle("active"); */
    });
});
