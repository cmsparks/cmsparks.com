//add more
let subjects = ["Developer","Data Scientist","Debater","Designer","Economist","Hackathon Organizer"]
let currentSubject = 0;
let displayStage = 
window.setInterval(function() {
	let subject = document.getElementById('subject');
	if (displayStage =)

}, 3000)

function fadeout(element, newText) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
	    element.innerHtml = newText;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadein(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
