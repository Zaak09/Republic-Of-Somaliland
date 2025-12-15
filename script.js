const questions = [
    {
        question: "What is the capital of Somaliland?",
        answers: [
            {text: 'Hargeisa',correct: true}, 
            {text: 'Burco',correct: false}, 
            {text: 'Borama',correct: false}, 
        
    ]
    },

    {
        question: "How many Presidents have been elected in somaliland elections?",
        answers: [
            {text: '9 Presidents',correct: false}, 
            {text: '4 Presidents',correct: false}, 
            {text: '6 Presidents',correct: true}, 
        
    ]
    },

    {
        question: "Which is the following Somaliland's main port?",
        answers: [
            {text: 'Las-qorey Port',correct: false}, 
            {text: 'Barbera Port',correct: true}, 
            {text: 'Lughaya Port',correct: false}, 
        
    ]
    },

    {
        question: "How Long somaliland's coastline in killometres?",
        answers: [
            {text: '600KM',correct: false}, 
            {text: '720KM',correct: false}, 
            {text: '850KM',correct: true}, 
        
    ]
    },

    {
        question: "In which year was the Constitution of the Republic of Somaliland written?",
        answers: [
            {text: '2000',correct: false}, 
            {text: '1997',correct: false}, 
            {text: '2002',correct: true}, 
        
    ]
    },
      {
        question: "How many one-person, one-vote elections have been held during the existence of the Republic of Somaliland?",
        answers: [
            {text: '7 Elections',correct: true}, 
            {text: '8 Elections',correct: false}, 
            {text: '5 Elections',correct: false}, 
        
    ]
    },

    


];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none"; 
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
} }
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach(button=> {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true});
        nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
    }
    )

startQuiz();