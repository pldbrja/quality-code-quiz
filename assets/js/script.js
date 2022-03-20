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
        x: 0,
        question: "In HTML, what attribute would you need to add to an anchor tag to link it?",
        answers: [
        {text: "src", value: 0,},
        {text: "href", value: 1,},
        {text: "link", value: 0,},
        {text: "id", value: 0,}
        ],
    },
        {
        x: 1,
        question: "Javascript was invented in...",
        answers: [
        {text: "2000", value: 0,},
        {text: "1992", value: 0,},
        {text: "1999", value: 0,},
        {text: "1995", value: 1,}
        ]
    },
        {
        x: 2,
        question: "Which of the following would you use to create a clickable button through an HTML file?",
        answers: [
        {text: "onclick", value: 1,},
        {text: ".addEventListener", value: 0,},
        {text: ":active", value: 0,},
        {text: "button", value: 0,}
        ]
    },
        {
        x: 3,
        question: "Which of the following is a .JS library?",
        answers: [
        {text: "Vue", value: 0,},
        {text: "Node", value: 0,},
        {text: "Angular", value: 0,},
        {text: "jQuery", value: 1,}
        ],
    },
        {
        x: 4,
        question: "A CSS file must be linked..",
        answers: [
        {text: "Between the Head tags.", value: 1,},
        {text: "Right after the first HTML tag.", value: 0,},
        {text: "In the Body tags.", value: 0,},
        {text: "Before the HTML tag.", value: 0,}
    ]
    }

];

var quizTimer = document.querySelector("#timedown")
quizTimer.setAttribute ("style", "display: none;");


// beginQuiz only will run once if the user does not click on the Scoreboard button. If the scoreboard is clicked, then returning to the landing screen will cause the play button to run an invisible timer w/o the questions.
// UPDATE: The scoreboard is definitely the sole issue with the buttons. You can run a loop of the quiz if you don't click it.
// Refreshing the page fixes the issue, as most of the buttons can only be used once due to the display attribute changes.
function beginQuiz() {
    var timeLimit = 79;

    countDown;
    
    if (startScreen.hasAttribute("class", "display: none;") !== true) {
    startScreen.setAttribute("style", "display: none;")

    quizContainer.setAttribute("style","display: block;");

    quizTimer.setAttribute("style","top: 0; right: 0;position: absolute; margin-right: 10px; box-shadow: -2px 2px rgb(236, 236, 236), -4px 4px black; border: 2px solid black; margin-top: 10px; background: orange; display: block;")
    quizTimer.textContent = '80';
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
    }, 100);

    document.querySelector("#score-announce").textContent = "Your final score was: " + finalScore;

    playQuiz();

    function resetCountDown() {
        clearInterval(countDown);
    };

};


//Code does not recognize much of the quizQuestions array and options, leading it to not push the text into the textContent options.
function playQuiz(x) {
    var questionName = document.getElementById
    ("question-title")
    var answerResponse = document.getElementById("comment-text")
    var questionIndex = 0;
    var options = document.querySelectorAll(".quizx");
    const optionA = document.querySelector("#optionA");
    const optionB = document.querySelector("#optionB");
    const optionC = document.querySelector("#optionC");
    const optionD = document.querySelector("#optionD");

    questionName.textContent = quizQuestions(x).question;

    optionA.textContent = quizQuestions[questionIndex(x)].answers[0].text;
    optionB.textContent = quizQuestions[questionIndex(x)].answers[1].text;
    optionC.textContent = quizQuestions[questionIndex(x)].answers[2].text;
    optionD.textContent = quizQuestions[questionIndex(x)].answers[3].text;


    //A line to make the questions progress after answer is chosen, but is unable to be read as the statement its meant to be.
    if (beginQuiz) {
        playQuiz(0)
    }

    if (questionIndex < quizQuestions.length) {
        questionIndex++;
        playQuiz(x);
    }

    if (options.value == 1) {
        finalScore++
        answerResponse.textContent = "Correct!";
    } else {
        answerResponse.textContent = "Wrong!";
        timeLimit - 10;
    }
}

var resetB = document.querySelector("#clear");


// Rendering the scoreboard did not work due to the function struggling to pull the userInitials variable from the localStorage.
function scoreRender(){
    scoreBoard.innerHTML = "";

    for (var i = 0; i < userInitials.length; i++) {
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

// If the function is run in another function, it will not find userInitials which causes it to see it as null.
function recordStorage() {
    localStorage.setItem("userInitials", JSON.stringify(userInitials));
}


// Can only work once, struggles to loop otherwise. If clicked, returning back to the landing screen will cause all other buttons to stop working. Issue with the play button is recorded near the start function.
leaderButton.addEventListener("click", function() {
    if (startScreen.hasAttribute("style","display: none;") === true) {
        startScreen.setAttribute("style","display: none;")
        scoreScreen.setAttribute("style","display: block;")
        quizContainer.setAttribute("style","display: none;")
        endScreen.setAttribute("style","display: none;")
    } else {
        startScreen.setAttribute("style","display: block;")
        scoreScreen.setAttribute("style","display: none;")
        quizContainer.setAttribute("style","display: none;")
        endScreen.setAttribute("style","display: none;")
    }
});

// localStorage.setItem issue documented above. Surprisingly enough, this code did work.
document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault();
    var initials = initialsInput.value.trim()

    if (initials === "") {
        return;
    }

    userInitials.push(initials);
    
    initialsInput.value = "";

    localStorage.setItem("userInitials", JSON.stringify(userInitials));
    scoreRender()
});

function redirect() {
    endScreen.setAttribute("style","display: none;");
    scoreScreen.setAttribute("style", "display: block;");
}

function mainScreen() {
    scoreScreen.setAttribute("style","display: none;");
    startScreen.setAttribute("style", "display: block;");
}

setTimeout(function fullscrBG() {
    document.querySelector("body").setAttribute("style", "background: rgb(236, 236, 236); transition: .5s background ease-in;")
}, 1000);

var contentLD = setTimeout(function () {
    document.querySelector("#playbox").setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
    leaderButton.setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
}, 1700);

// Worked.
resetB.addEventListener("click", function() {
    localStorage.clear();
});