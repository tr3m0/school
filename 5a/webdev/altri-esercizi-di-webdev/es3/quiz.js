const quiz = [
    {
        question: "1. What is the capital city of Japan?",
        answers: [
            "Beijing",
            "Seoul",
            "Tokyo",
            "Manila"
        ],
        correct: 2
    },
    {
        question: "2. Who wrote the play 'Romeo and Juliet'?",
        answers: [
            "Charles Dickens",
            "William Shakespeare",
            "Jane Austen",
            "Mark Twain"
        ],
        correct: 1
    },
    {
        question: "3. Which planet is known as the 'Red Planet'?",
        answers: [
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        correct: 1,
    },
    {
        question: "4. What is the smallest bone in the human body?",
        answers: [
            "Stapes",
            "Femur",
            "Tibia",
            "Radius"
        ],
        correct: 0
    },
    {
        question: "5. Which element has the name O?",
        answers: [
            "Gold",
            "Oxygen",
            "Osmium",
            "Ozone"
        ],
        correct: 1
    }
];
if (localStorage.getItem("quiz") === null) {
    localStorage.setItem("quiz", JSON.stringify(quiz));
}

const userAnswers = JSON.parse(localStorage.getItem("answers")) || {};

document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("user")
    if (username === null) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("username").textContent = username;

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.type = "submit";

    document.getElementById("quiz").append(
        ...quiz.map(({question, answers}, questionIndex) => {
            const container = document.createElement("div");

            const title = document.createElement("p");
            title.textContent = question;

            container.append(
                title,
                ...answers.flatMap((answer, answerIndex) => {
                    const option = document.createElement("input");
                    option.type = "radio";
                    option.name = questionIndex.toString();
                    option.onclick = () => {
                        document.querySelectorAll('input[name="' + questionIndex.toString() + '"]:checked')
                            .forEach(c => {
                            c.checked = false;
                        });
                        option.checked = true;
                        userAnswers[questionIndex] = answerIndex;
                        console.log("answers: ", userAnswers)
                    };
                    if (userAnswers[questionIndex] === answerIndex) {
                        option.checked = true;
                    }

                    return [option, document.createTextNode(answer), document.createElement("br")];
                })
            );

            return container;
        }),
        submit
    );
});

document.getElementById("quiz").addEventListener("submit", event => {
    if (Object.entries(userAnswers).length !== quiz.length) {
        event.preventDefault();
    }
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("answers", JSON.stringify(userAnswers));
});