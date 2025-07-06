const questions = [
  {
    question: "What is the capital of India?",
    options: ["London", "Delhi", "Berlin", "Rome"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Hyperlink Markup Language", "Hyper Text Markdown Language", "None"],
    answer: "Hypertext Markup Language"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  feedbackEl.textContent = "";
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.textContent = option;
    div.addEventListener("click", () => checkAnswer(option));
    optionsEl.appendChild(div);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestionIndex].answer;
  if (selected === correct) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer: ${correct}`;
    feedbackEl.style.color = "red";
  }
  scoreEl.textContent = `Score: ${score}`;
  // disable options after selection
  Array.from(optionsEl.children).forEach(child => child.style.pointerEvents = "none");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Complete!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = `Your final score is ${score} out of ${questions.length}`;
    nextBtn.style.display = "none";
  }
});

loadQuestion();
