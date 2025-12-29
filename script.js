const questions = [


  {
        question: "Which president was responsible for establishing and institutionalizing the statehood of Somaliland?",
        question_so: "Kuma ahaa madaxweynihii aasaasay oo nidaamiyay dawladnimada Somaliland?",
        type: "image",
        answers: [
            {image: 'images/Somalialnd-sixth President.png', name: 'Abdirahman Mohamed Abdilahi', correct: false},
            {image: 'images/Somaliland-third President.png', name: 'Dahir Riyale Kahin', correct: false},
            {image: 'images/Somalialnd-first  President.png', name: 'Abdirahman Ahmed Ali Tuur', correct: false},
            {image: 'images/Somaliland-second president.png', name: 'Mohamed Haji Ibrahim Egal', correct: true},
        ]
    },


    {
        question: "Which president was responsible for implementing and advancing Somaliland’s infrastructure development?",
        question_so: "Kuma ahaa madaxweynihii hirgeliyay oo horumariyay kaabayaasha dhaqaalaha Somaliland?",
        type: "image",
        answers: [
            {image: 'images/Somalialnd-fiveth  President.png', name: 'Muse Bihi Abdi', correct: false},
            {image: 'images/Somaliland-third President.png', name: 'Dahir Riyale Kahin', correct: false},
            {image: 'images/Somaliland-fourth President.png', name: 'Ahmed Mohamed Mohamoud (Silanyo)', correct: true},
            {image: 'images/Somaliland-second president.png', name: 'Mohamed Haji Ibrahim Egal', correct: false},
        ]
    },



    {
        question: "Which of the following is the flag of Somaliland?",
        question_so: "Midkee ka mid ah waa calanka Somaliland?",
        type: "image",
        answers: [
            {image: './images/Somaliland_flag.png', correct: true},
            {image: './images/Somalia_flag.png', correct: false},
            {image: './images/Ruwanda_flag.png', correct: false},
            {image: './images/Ethiopia_flag.png'}
        ]
    },


    {
        question: "Which is  the following capital of Somaliland?",
        question_so: "Midkee waa caasimadda Somaliland?",
        answers: [
            {text: 'A. Hargeisa',correct: true}, 
            {text: 'B. Burco',correct: false}, 
            {text: 'C. Borama',correct: false}, 
        ]
    },


    {
        question: "How many Presidents have been elected in somaliland elections?",
        question_so: "Imisa madaxweyne ayaa si doorasho ah loogu doortay Somaliland?",
        answers: [
            {text: 'A. 9 Presidents',correct: false}, 
            {text: 'B. 4 Presidents',correct: false}, 
            {text: 'C. 6 Presidents',correct: true}, 
        ]
    },


    {
        question: "Which is the following Somaliland's main port?",
        question_so: "Midkee waa dekedda ugu weyn Somaliland?",
        answers: [
            {text: 'A. Las-qorey Port',correct: false}, 
            {text: 'B. Barbera Port',correct: true}, 
            {text: 'C. Lughaya Port',correct: false}, 
        ]
    },


    {
        question: "How Long somaliland's coastline in killometres?",
        question_so: "Dhererka xeebta Somaliland waa imisa KM?",
        answers: [
            {text: 'A. 600KM',correct: false}, 
            {text: 'B. 720KM',correct: false}, 
            {text: 'C. 850KM',correct: true}, 
        ]
    },


    {
        question: "In which year was the Constitution of the Republic of Somaliland written?",
        question_so: "Sanadkee ayaa la qoray dastuurka Jamhuuriyadda Somaliland?",
        answers: [
            {text: 'A. 2000',correct: false}, 
            {text: 'B. 1997',correct: false}, 
            {text: 'C. 2002',correct: true}, 
        ]
    },

    {
        question: "How many one-person, one-vote elections have been held during the existence of the Republic of Somaliland?",
        question_so: "Imisa doorasho oo qof iyo cod ah ayaa ka dhacday Somaliland tan iyo markii la aas aasay?",
        answers: [
            {text: 'A. 7 Elections',correct: true}, 
            {text: 'B. 8 Elections',correct: false}, 
            {text: 'C. 5 Elections',correct: false}, 
        ]
    },


    {
        question: " The Somaliland passport was first issued in?",
        question_so: "Baasaboorka Somaliland markii ugu horreysay goormaa la bixiyay?",
        answers: [
            {text: 'A. 1995',correct:  false}, 
            {text: 'B. 1996',correct: true}, 
            {text: 'C. 2000',correct: false}, 
            {text: 'D. 2001',correct: false}, 
        ]
    },


    {
        question: " The first country formally recognized Somaliland was?",
        question_so: "Waddankii ugu horreeyay ee si rasmi ah u aqoonsaday Somaliland waa kee?",
        answers: [
            {text: 'A. UK',correct:  false}, 
            {text: 'B. Mexico',correct: false}, 
            {text: 'C. Israel',correct: true}, 
            {text: 'D. Ethiopia',correct: false}, 
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

    if (currentQuestion.type === "image") {
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.classList.add("btn", "img-btn");
            if (answer.image) {
                const img = document.createElement("img");
                img.src = answer.image;
                img.alt = answer.name ? answer.name : "Answer image option";
                img.classList.add("answer-image");
                img.addEventListener("click", function(e) {
                    e.stopPropagation();
                    button.click();
                });
                button.appendChild(img);
            }
            if (answer.name) {
                const nameDiv = document.createElement("div");
                nameDiv.className = "president-name";
                nameDiv.textContent = answer.name;
                button.appendChild(nameDiv);
            }
            button.dataset.correct = !!answer.correct;
            button.addEventListener("click", selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    } else {
        currentQuestion.answers.forEach(answer=> {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            button.dataset.correct = !!answer.correct;
            button.addEventListener("click", selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }
}

function resetState() {
    nextButton.style.display = "none"; 
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
} }
    const resultIcon = document.getElementById('result-icon');
    if (resultIcon) resultIcon.innerHTML = '';
function selectAnswer(e) {
    // Always get the button, even if the image is clicked
    const selectedBtn = e.currentTarget || e.target.closest('button');
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
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