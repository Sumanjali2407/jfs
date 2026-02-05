const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "HTML stands for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyperlinks Text Mark Language",
        d: "None",
        correct: "a"
    },
    {
        question: "Which is used for styling web pages?",
        a: "HTML",
        b: "CSS",
        c: "Java",
        d: "Python",
        correct: "b"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("optionA").innerText = q.a;
    document.getElementById("optionB").innerText = q.b;
    document.getElementById("optionC").innerText = q.c;
    document.getElementById("optionD").innerText = q.d;
}

function getSelectedAnswer() {
    const answers = document.getElementsByName("answer");
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            return answers[i].value;
        }
    }
    return null;
}

function nextQuestion() {
    const selectedAnswer = getSelectedAnswer();

    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        const radios = document.getElementsByName("answer");
        radios.forEach(radio => radio.checked = false);
    } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").innerText =
            `Your Score: ${score} / ${quizData.length}`;
    }
}

loadQuestion();
