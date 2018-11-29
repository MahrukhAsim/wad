var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}, {
    question: "What is the color of a reddish?",
    choices: ["select",
        "red",
        "black",
        "white"],
    correctAnswer: 2
} ,{
    question : "Who is the founder of pakistan?",
    choices : [ "select",
        "Allama iqbal",
        "Quaid e Azam",
        "Donald Trump"],
    correctAnswer : 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    document.getElementById("question").innerHTML=questions[currentQuestion].question+questions[currentQuestion].choices;
    currentQuestion++;
    document.getElementById("choices").classList=questions[currentQuestion].question+questions[currentQuestion].choices;
}
function displayCurrentQuestion() {
    document.getElementById("question").innerHTML=questions[currentQuestion].question+questions[currentQuestion].choices;
    currentQuestion++;
}
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    displayCurrentQuestion();
    displayScore();
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}