var initialsInput = document.querySelector("name");
var finalScore = 0;
var endButton = document.getElementById("finish");
var quizContainer = document.getElementById("questions-container");
var startScreen = document.getElementById("landing-screen");
var leaderButton = document.querySelector("#scoreButton")

var userScore = {
    finalCount: finalScore.value,
};

var quizQuestions = [
    {
        question: "In HTML, what attribute would you need to add to an anchor tag to link it?",
        answers: {
            A: "src",
            B: "href",
            C: "link",
            D: "id",
        },
        question: "Javascript was invented in...",
        answers: {
            A: "2000",
            B: "1992",
            C: "1999",
            D: "1995",
        },
        question: "Which of the following would you use to create a clickable button through a .js file?",
        answers: {
            A: "onclick",
            B: ".addEventListener",
            C: ":active",
            D: "button",
        },
        question: "Which of the following is a pseudo-element?",
        answers: {
            A: ":active",
            B: ":target",
            C: ":first-child",
            D: "::before",
        },
        question: "A CSS file must be linked..",
        answers: {
            A: "Between the Head tags.",
            B: "Right after the first HTML tag.",
            C: "In the Body tags.",
            D: "Before the HTML tag.",
        }
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
            resetCountDown();
            return;
        }
    }, 1000);

    function resetCountDown() {
        clearInterval(countDown);
    };

};

//endButton.addEventListener("click", function(event){
    //event.preventDefault();
    //if (e) {
       // alert("Are you sure you want to submit that?")
        //return;
    //} else {
    //    recordScore()
    //}
//});


setTimeout(function fullscrBG() {
    document.querySelector("body").setAttribute("style", "background: rgb(236, 236, 236); transition: .5s background ease-in;")
}, 1000);

var contentLD = setTimeout(function () {
    document.querySelector("#playbox").setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
    leaderButton.setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
}, 1700);
