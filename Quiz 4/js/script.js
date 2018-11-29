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
    choices : [
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}, {
    question: "What is the color of a reddish?",
    choices: [ "green",
        "red",
        "black",
        "white"],
    correctAnswer: 3
} ,{
    question : "Who is the founder of pakistan?",
    choices : ["Gandhi",
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
    currentQuestion=currentQuestion+1;
    if(questions.length==currentQuestion)
        displayScore();
    displayCurrentQuestion();
}
function displayCurrentQuestion() {
    var myQuestion = document.getElementById("question");
    var answer = document.getElementById("choice-list");
    myQuestion.innerText = questions[currentQuestion].question;
    answer.innerHTML = "";
    for(var i = 0;i<questions[currentQuestion].choices.length;i++) {
        answer.innerHTML += "<li>" + "<input type=radio name = option value = questions[currentQuestion].choices[i]>" + questions[currentQuestion].choices[i] + "</li>";
        if (document.querySelector("input[type=radio]:checked") == questions[currentQuestion].correctAnswer)
        {
            correctAnswers = correctAnswers + 1;
        }
        if(document.querySelector("input[type=radio]:checked")==false)
        {
            alert('Please answer question '+i);
        }
    }
}
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    displayCurrentQuestion();
    displayScore();
    hideScore();
}
function displayerror()
{

}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}