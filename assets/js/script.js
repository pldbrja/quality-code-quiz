var initialsInput = document.querySelector("name");
var finalScore = 0;
var startScreen = document.querySelector("#landing-screen")
var endButton = document.querySelector("#finish");

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

]

function playQuiz() {
    var quizQuestions = document.querySelectorAll(".playQuest");
    var startQuiz = document.querySelector("#starter");
    const questions = Array.from(quizQuestions);

    startQuiz.addEventListener("click", function(){
        if (element.matches(startScreen)) {
            if (state === "visible") {
            element.dataset.state = "hidden";
            element.setAttributes({
                "data-state": "hidden",
                "style": "display: none",
            })

            } else {
            element.dataset.state = "visible";
            }
        }
    });
}

endButton.addEventListener("click", function(event){
    event.preventDefault();
    if (e) {
        alert("Are you sure you want to submit that?")
        return;
    } else {
        recordScore()
    }
});


setTimeout(function fullscrBG() {
    document.querySelector("body").setAttribute("style", "background: rgb(236, 236, 236); transition: .5s background ease-in;")
}, 1000);

var contentLD = setTimeout(function () {
    document.querySelector("#playbox").setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
}, 1700);
