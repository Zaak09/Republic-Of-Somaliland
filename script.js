const questions = [
    {
        question: "What is the capital of Somaliland?",
        answers: [
            {text: 'A. Hargeisa',correct: true}, 
            {text: 'B. Burco',correct: false}, 
            {text: 'C. Borama',correct: false}, 
        
    ]
    },

    {
        question: "How many Presidents have been elected in somaliland elections?",
        answers: [
            {text: 'A. 9 Presidents',correct: false}, 
            {text: 'B. 4 Presidents',correct: false}, 
            {text: 'C. 6 Presidents',correct: true}, 
        
    ]
    },

    {
        question: "Which is the following Somaliland's main port?",
        answers: [
            {text: 'A. Las-qorey Port',correct: false}, 
            {text: 'B. Barbera Port',correct: true}, 
            {text: 'C. Lughaya Port',correct: false}, 
        
    ]
    },

    {
        question: "How Long somaliland's coastline in killometres?",
        answers: [
            {text: 'A. 600KM',correct: false}, 
            {text: 'B. 720KM',correct: false}, 
            {text: 'C. 850KM',correct: true}, 
        
    ]
    },

    {
        question: "In which year was the Constitution of the Republic of Somaliland written?",
        answers: [
            {text: 'A. 2000',correct: false}, 
            {text: 'B. 1997',correct: false}, 
            {text: 'C. 2002',correct: true}, 
        
    ]
    },
      {
        question: "How many one-person, one-vote elections have been held during the existence of the Republic of Somaliland?",
        answers: [
            {text: 'A. 7 Elections',correct: true}, 
            {text: 'B. 8 Elections',correct: false}, 
            {text: 'C. 5 Elections',correct: false}, 
        
    ]
    },

       {
        question: " The Somaliland passport was first issued in?",
        answers: [
            {text: 'A. 1995',correct:  false}, 
            {text: 'B. 1996',correct: true}, 
            {text: 'C. 2000',correct: false}, 
            {text: 'D. 2001',correct: false}, 
        
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
    const resultIcon = document.getElementById('result-icon');
    if (resultIcon) resultIcon.innerHTML = '';
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

// Automatically advance to next question after a short delay
            setTimeout(() => {
            nextButton.click();
        }, 1000);
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
    const resultIcon = document.getElementById('result-icon');
    const pct = score / questions.length;
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    if (score === questions.length) {
        if (resultIcon) {
            resultIcon.innerHTML = `<div><span class="clap" aria-hidden="true">👏</span><div class="congrats">Congratulation</div></div>`;
        }
    } else if (pct >= 0.7 && pct < 1) {
        // For 70%, 80%, 90% ranges show an encouraging animation and message
        if (resultIcon) {
            resultIcon.innerHTML = `<div><span class="encourage" aria-hidden="true">👍</span><div class="encourage-text">Not bad — keep studying, learn your country fully.</div></div>`;
        }
    } else if (pct < 0.5) {
        if (resultIcon) {
            resultIcon.innerHTML = `<div><span class="fail" aria-hidden="true">😢</span><div class="fail-text">Work hard and learn more about your country.</div></div>`;
        }
    } else {
        if (resultIcon) resultIcon.innerHTML = '';
    }
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