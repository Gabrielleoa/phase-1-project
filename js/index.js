const baseURL= 'https://my-json-server.typicode.com/gabrielleoa/phase-1-project/results'
getTriviaInformation()
function getTriviaInformation(){
    fetch(baseURL)
    .then((response) => response.json())
    .then(data => {
        displayTriviaQuestions(data),
    console.log(data)
    })
}
function displayTriviaQuestions(results){
    const triviaQuestions= document.getElementById("triviaQuestions");
    for(const result of results) {
        console.log(result)
        let questions = document.getElementById("listOfQuestions")
        let li = document.createElement('li')
       
        li.textContent= result.question
        li.addEventListener('click', () => displayMultipleChoiceAnswers(result));
        questions.appendChild(li)

}
}
let currentQuestion = {};

function displayMultipleChoiceAnswers(result){
    const answers = document.getElementById('triviaAnswers')
    answers.innerHTML=`<b><ul>${result.multiple_choice_answers}<ul><b>`

    currentQuestion = {...result}
   
    }
    //answers.addEventListener('click', () => displayCorrectAnswer(result));

        
    document.querySelector("#answerForm").addEventListener("submit", function(event){
        event.preventDefault()
        const frm = new FormData(this)
        const answer = frm.get("answer")

        console.log(currentQuestion.correct_answer === answer)
        console.log(answer)
        if(answer === currentQuestion.correct_answer){
            alert("correct!")
        }else{
            alert("false")
        }
    })
    

    

function displayCorrectAnswer(results){
    const writtenAnswerChoice= document.getElementById("mb-3")
    writtenAnswerChoice.innerHTML
    if(writtenAnswerChoice == results.correctAnswer){
       return true
    }else{
        return false

    
}



}