var initialsInput = document.querySelector("#name");
var finalScore = 0;
var endButton = document.getElementById("finish");
var quizContainer = document.getElementById("questions-container");
var startScreen = document.getElementById("landing-screen");
var leaderButton = document.getElementById("scoreButton");
var scoreScreen = document.getElementById("score-screen");
var endScreen = document.getElementById("finish-screen");
var scoreBoard = document.querySelector("#score-record");


var userInitials = [];

const quizQuestions = [
    {
        question: "In HTML, what attribute would you need to add to an anchor tag to link it?",
        answers: [
            {option: "src", value: 0},
            {option: "href", value: 1},
            {option: "link", value: 0},
            {option: "id", value: 0},
        ],
        question: "Javascript was invented in...",
        answers: [
            {option: "2000", value: 0},
            {option: "1992", value: 0},
            {option: "1999", value: 0},
            {option: "1995", value: 1},
        ],
        question: "Which of the following would you use to create a clickable button through an HTML file?",
        answers: [
            {option: "onclick", value: 1},
            {option: ".addEventListener", value: 0},
            {option: ":active", value: 0},
            {option: "button", value: 0},
        ],
        question: "Which of the following is a pseudo-element?",
        answers: [
            {option: ":active", value: 0},
            {option: ":target", value: 0},
            {option: ":first-child", value: 0},
            {option: "::before", value: 1},
        ],
        question: "A CSS file must be linked..",
        answers: [
            {option: "Between the Head tags.", value: 1},
            {option: "Right after the first HTML tag.", value: 0},
            {option: "In the Body tags.", value: 0},
            {option: "Before the HTML tag.", value: 0},
        ]
    }

];

var quizTimer = document.querySelector("#timedown")
quizTimer.setAttribute ("style", "display: none;");

function beginQuiz() {
    var timeLimit = 59;

    countDown;
    
    if (startScreen.hasAttribute("style", "display: none;") !== true) {
    startScreen.setAttribute("style", "display: none;")

    quizContainer.setAttribute("style","display: block;");

    quizTimer.setAttribute("style","top: 0; right: 0;position: absolute; margin-right: 10px; box-shadow: -2px 2px rgb(236, 236, 236), -4px 4px black; border: 2px solid black; margin-top: 10px; background: orange; display: block;")
    quizTimer.textContent = '60';
    }

    var countDown = setInterval(function () {

        if (timeLimit > -1) {
            quizTimer.textContent = timeLimit;
            timeLimit--;
        } else {
            alert("Time's up!");
            quizTimer.textContent = '';
            quizTimer.setAttribute ("style", "display: none;")
            
            quizContainer.setAttribute("style", "display: none;")
            endScreen.setAttribute("style", "display: block;");
            resetCountDown();
            return;
        }
    }, 10);

    function resetCountDown() {
        clearInterval(countDown);
    };

};

function playQuiz() {
    var selectQuestionName = document.getElementById
    ("question-title")
    var answerResponse = document.getElementById("comment-text")
    var selectQuestion = 0;

    if (quizQuestions[selectQuestion].value === 1) {
        finalScore++
        answerResponse.textContent = "Correct!";
    } else {
        answerResponse.textContent = "Wrong!";
    }

    document.querySelector("#scoreannounce").textContent = "Your final score was: " + finalScore;
}

function scoreRender(){
    scoreBoard.innerHTML = "";

    for (var i =0; i < userInitials.length; i++) {
        var userInitials = userInitials[i];

        var entry = document.createElement("li");

        entry.textContent = userInitials;
        entry.setAttribute("data-index", i);

        scoreBoard.appendChild(entry);
    }
};

function init() {
    var initialRecords = JSON.parse(localStorage.getItem("userInitials"));

    if (initialRecords !== null) {
        userInitials = initialRecords;
    }

    scoreRender()
}

function recordStorage() {
    localStorage.setItem("userInitials", JSON.stringify(userInitials));
}


leaderButton.addEventListener("click", function() {
    if (startScreen.hasAttribute("style","display: none;") !== true) {
        startScreen.setAttribute("style","display: none;")
        scoreScreen.setAttribute("style","display: block;")
    } 
    else if (quizContainer.hasAttribute("style","display: none;") !== true) {
        quizContainer.setAttribute("style","display: none;");
        startScreen.setAttribute("style","display: none;");
    } else if (scoreScreen.hasAttribute("style","display: none;") == true) {
        startScreen.setAttribute("style","display: block;")
        scoreScreen.setAttribute("style","display: none;")
    }
});

document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault();
    var initials = initialsInput.value.trim()

    if (initials === "") {
        return;
    }

    userInitials.push(initials);
    
    initialsInput.value = "";

    redirect()

    localStorage.setItem("userInitials", JSON.stringify(userInitials));
    scoreRender()
});

function redirect() {
    endScreen.setAttribute("style","display: none;")
    scoreScreen.setAttribute("style", "display: block;")
}
setTimeout(function fullscrBG() {
    document.querySelector("body").setAttribute("style", "background: rgb(236, 236, 236); transition: .5s background ease-in;")
}, 1000);

var contentLD = setTimeout(function () {
    document.querySelector("#playbox").setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
    leaderButton.setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
}, 1700);