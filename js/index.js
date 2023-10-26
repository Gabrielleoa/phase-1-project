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
function displayMultipleChoiceAnswers(result){
    const answers = document.getElementById('triviaAnswers')
    answers.innerHTML=`<b><ul>${result.multiple_choice_answers}<ul><b>`
    document.getElementById("answerForm").addEventListener('submit', function(evt){
        evt.preventDefault();
        document.getElementById
    })
    //answers.addEventListener('click', () => displayCorrectAnswer(result));

        
    }
    

    

function displayCorrectAnswer(results){
    const writtenAnswerChoice= document.getElementById("mb-3")
    writtenAnswerChoice.innerHTML
    if(writtenAnswerChoice == results.correctAnswer){
       return true
    }else{
        return false

    
}



}