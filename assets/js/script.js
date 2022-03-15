var beginButton = document.querySelector("#starter")

var userScore = [];

var fullscrBG = setTimeout(function() {
    document.querySelector("body").setAttribute("style", "background: rgb(236, 236, 236); transition: .5s background ease-in;")
}, 1000);

var contentLD = setTimeout(function () {
    document.querySelector("#playbox").setAttribute("style","opacity: 1; animation: fadeIn .3s ease-in; ")
}, 1700);


beginButton.addEventListener("click", function (event) {
    event.preventDefault;
    ADDTOTHIS;
});
fullscrBG();