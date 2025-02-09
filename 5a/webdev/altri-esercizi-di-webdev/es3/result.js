const quiz = JSON.parse(localStorage.getItem("quiz"));
const userAnswers = JSON.parse(localStorage.getItem("answers"));
const user = localStorage.getItem("user");

document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("user")
    if (username === null) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("username").textContent = username;

    document.getElementById("results").append(
        document.createTextNode(
            "Correct answers: " + quiz
                .map(q => q.correct)
                .reduce((count, answer, index) => {
                    if (userAnswers[index] === answer) {
                        count++;
                    }
                    return count;
                })
        ),
        document.createElement("br"),
        ...Object.values(userAnswers).map((answer, index) => {
            const container = document.createElement("div");
            const {question, answers, correct} = quiz[index];
            container.append(
                question, document.createElement("br"),
                "Your answer: ", answers[answer], document.createElement("br"),
                "Correct: ", answers[correct]
            );
            return container;
        }),
    );
});