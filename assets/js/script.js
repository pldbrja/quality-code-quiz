var initialsInput = document.querySelector("name");
var finalScore = 0;

var userScore = {
    finalCount: finalScore.value,
};

var quizQuestions = document.querySelectorAll('#playQuest');

const questions = Array.from(quizQuestions);

console.log(questions);

setTimeout(function fullscrBG() {
    document.querySelector("body").setAttribute("style", "background: rgb(236, 236, 236); transition: .5s background ease-in;")
}, 1000);

var contentLD = setTimeout(function () {
    document.querySelector("#playbox").setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
}, 1700);
